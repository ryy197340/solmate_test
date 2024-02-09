import { FC, Fragment, useEffect, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import BN from 'bn.js'
import { BigNumber, Contract, ethers } from 'ethers'
import axios from 'axios';
import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react'
import { WalletModalButton } from '@solana/wallet-adapter-react-ui';
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey'
import { SALE_TOKEN_LIST, BSC_PRESALE_ADDRESS, BSC_CHAIN_ID, ETH_CHAIN_ID, ETH_PRESALE_ADDRESS, API_URL } from '../constants'
import CurrencyInput, { CurrencyInputProps } from 'react-currency-input-field'
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Address, useAccount, useConnect, useContract, useNetwork, useSigner, useSwitchNetwork } from 'wagmi'
import { toast } from 'react-toastify'

import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { ChainType, PresaleState, TokenType, Token } from '../constants/types'
import presaleABI from '../constants/presale_abi.json';
import erc20ABI from '../constants/erc20_abi.json';
import { usePresaleProgram } from '../hooks'
import { getChainLogo, getChainName } from '../utils'
import { useUsdPrice } from '../hooks/useUsdPrice';
import { usePresaleInfo } from '../hooks/usePresaleInfo';
import { base64 } from 'ethers/lib/utils.js';
import { sendAndConfirmRawTransaction, Transaction } from '@solana/web3.js';

interface ExchangeModalPrps {
    isModalOpen: boolean
    toggleModal: any
}

const sellTokens = [
    TokenType.USDC_ETH,
    TokenType.USDT_ETH,
    TokenType.NATIVE_ETH,
    TokenType.USDC_BSC,
    TokenType.USDT_BSC,
    TokenType.NATIVE_BSC,
    TokenType.USDC_SOL,
    TokenType.USDT_SOL,
    TokenType.NATIVE_SOL,
]

export default function ExchangeModal({
    isModalOpen,
    toggleModal
}: ExchangeModalPrps) {

    const { connect: evmConnect } = useConnect({
        connector: new InjectedConnector()
    })
    const { address, isConnected } = useAccount();
    const { chain } = useNetwork();
    const { data: signer } = useSigner();
    const { switchNetwork } = useSwitchNetwork();

    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const anchorWallet = useAnchorWallet();
    const program = usePresaleProgram(connection, anchorWallet);

    const [mint, setMint] = useState<Token>(SALE_TOKEN_LIST[TokenType.USDC_ETH]);
    const [sellAmount, setSellAmount] = useState<number>();
    const [buyAmount, setBuyAmount] = useState<string>();
    const [processing, setProcessing] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const { price: usdPrice } = useUsdPrice(mint);
    const { price: presalePrice } = usePresaleInfo(false);

    useEffect(() => {
        setSellAmount(undefined);
        setBuyAmount(undefined);
        setErrorMsg("");
    }, [
        isModalOpen
    ])

    useEffect(() => {
        const parsedVal = Number(buyAmount);
        if (presalePrice && parsedVal) {
            if (mint.isNative) {
                if (usdPrice) {
                    setSellAmount(Math.ceil(parsedVal / presalePrice / usdPrice * 1_000_000) / 1_000_000);
                }
            }
            else {
                setSellAmount(Math.ceil(parsedVal / presalePrice * 1_000_000) / 1_000_000);
            }
        }
    }, [
        mint,
        presalePrice,
        usdPrice
    ])

    useEffect(() => {
        const handleSwitchNetwork = async () => {
            if (mint.chainType === ChainType.ETH
                || mint.chainType === ChainType.BSC) {
                if (!chain) {
                    return;
                }

                if (mint.chainId === chain.id) {
                    return;
                }

                switchNetwork?.(mint.chainId);
            }
        }

        handleSwitchNetwork();
    }, [
        mint,
        chain
    ])

    const handleInputChange: CurrencyInputProps['onValueChange'] = (value, _, values): void => {

        setBuyAmount(value);

        if (!value) {
            setSellAmount(undefined);
            return;
        }

        const parsedVal = Number(value);
        if (Number.isNaN(parsedVal)) {
            setSellAmount(undefined);
            return;
        }

        if (presalePrice) {
            if (mint.isNative) {
                if (usdPrice) {
                    setSellAmount(Math.ceil(parsedVal / presalePrice / usdPrice * 1_000_000) / 1_000_000);
                }
            }
            else {
                setSellAmount(Math.ceil(parsedVal / presalePrice * 1_000_000) / 1_000_000);
            }

        }
    }

    const handleToken = (token: TokenType) => {
        setMint(SALE_TOKEN_LIST[token]);
    }

    const handleConnect = () => {
        if (mint.chainType === ChainType.ETH
            || mint.chainType === ChainType.BSC) {
            evmConnect();
        }
    }

    const handlePresale = () => {
        presale();
    }

    const presale = async () => {

        // Check type by wallet
        if (mint.chainType === ChainType.ETH
            || mint.chainType === ChainType.BSC) {
            if (!address || !signer) {
                toast.error('You need to connect wallet.');
                return;
            }

            if (!chain || chain.id != mint.chainId) {
                toast.error('You need to connect wallet.');
                return;
            }

            setProcessing(true);
            let toastId = toast.loading('Processing request...', {
                isLoading: true
            });

            let signature, tokenAmount, amount, deadline;

            try {
                const { data } = await axios.post(API_URL + '/generate-signature', {
                    from: address,
                    token_address: mint.address,
                    amount: buyAmount,
                    chain: mint.chainType
                })

                signature = data.signature;
                tokenAmount = data.tokenAmount as BigNumber;
                amount = data.amount as BigNumber;
                deadline = data.deadline;
            }
            catch (ex) {
                console.log(ex);
                toast.done(toastId);
                setProcessing(false);
                toast.error("Get error while generate signature.");
                return;
            }

            try {
                let presaleAddress = mint.chainType === ChainType.ETH ? ETH_PRESALE_ADDRESS : BSC_PRESALE_ADDRESS;
                let tokenAddress = mint.address;

                let ethVal = null;
                if (!mint.isNative && mint.address) {
                    const tokenContract = new Contract(tokenAddress, erc20ABI, signer);
                    const allowance = await tokenContract.allowance(
                        address,
                        presaleAddress
                    ) as BigNumber;
                    if (allowance.lt(tokenAmount)) {
                        await (await tokenContract.approve(
                            presaleAddress,
                            '0xFFFFFFFFFFFFFFFFFFFFFFFF'
                        )).wait();
                    }
                }
                else {
                    ethVal = tokenAmount;
                }

                const presaleContract = new Contract(presaleAddress, presaleABI, signer);
                const tx = await (await presaleContract.deposit(
                    tokenAddress, // token address
                    tokenAmount, // tokenAmount
                    amount, // amount
                    BigNumber.from(deadline), // deadline
                    signature, //signature
                    {
                        value: ethVal
                    }
                )).wait();

                if (tx.status === 1) {
                    await axios.post(API_URL + '/process-evm', {
                        chain: mint.chainType,
                        tx_hash: tx.transactionHash
                    })

                    setProcessing(false);
                    toast.done(toastId);
                    toast.success("Deposit token successed.");
                    toggleModal();
                }
                else {
                    setProcessing(false);
                    toast.done(toastId);
                    toast.success("Deposit token transaction failed.");
                }

            }
            catch (ex) {
                console.log(ex);
                setProcessing(false);
                toast.done(toastId);
                toast.error("Deposit token has been failed.");
                return;
            }
        }
        else if (mint.chainType === ChainType.SOL) {
            if (!publicKey || !anchorWallet) {
                toast.error('You need to connect wallet.');
                return;
            }

            setProcessing(true);
            let toastId = toast.loading('Processing request...', {
                isLoading: true
            });

            try {
                const { data } = await axios.post(API_URL + '/request-sol', {
                    from: publicKey.toString(),
                    tokenAddress: mint.address,
                    amount: buyAmount
                })

                const recoveredTx = Transaction.from(
                    Buffer.from(data.tx, "base64")
                );
                const tx = await anchorWallet.signTransaction(recoveredTx);
                const txHash = await sendAndConfirmRawTransaction(connection, tx.serialize(), {
                    commitment: 'finalized',
                    skipPreflight: true
                })

                await axios.post(API_URL + '/process-sol', {
                    tx_hash: txHash
                })

                setProcessing(false);
                toast.done(toastId);
                toast.success("Deposit token successed.");
                toggleModal();
            }
            catch (ex) {
                console.log(ex);
                setProcessing(false);
                toast.done(toastId);
                toast.error("Deposit token has been failed.");
                return;
            }
        }
    }

    return (
        <Transition
            appear
            show={isModalOpen}
            as={Fragment}
        >
            <Dialog
                open={isModalOpen}
                onClose={() => toggleModal()}
                className="relative z-10"
            >

                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
                    <Dialog.Panel className="w-full max-w-sm rounded px-8 py-4 bg-exchangemodal">
                        <Dialog.Title className="text-white text-2xl font-bold flex justify-between pb-8">
                            <span>
                                Exchange
                            </span>
                            <button type='button' onClick={() => toggleModal()}>
                                X
                            </button>
                        </Dialog.Title>

                        <Dialog.Description>

                            <div className='relative mb-4'>
                                <div className='text-white mb-2'>
                                    Buying
                                </div>
                                <div className='bg-[#222540] p-2 flex justify-between text-white'>
                                    <CurrencyInput
                                        name="buy"
                                        className='bg-transparent outline-none'
                                        value={buyAmount}
                                        decimalsLimit={0}
                                        onValueChange={handleInputChange}
                                    />
                                    <span>SOUL</span>
                                </div>
                            </div>

                            <div className='relative'>
                                <div className='text-white mb-2'>
                                    Selling
                                </div>
                                <div className='bg-[#222540] p-2 flex text-white'>
                                    <CurrencyInput
                                        name="sell"
                                        className='bg-transparent outline-none w-full'
                                        value={sellAmount}
                                        decimalsLimit={6}
                                        readOnly
                                    />

                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="flex w-full gap-1 justify-center px-1 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                                <div className='relative mr-1'>
                                                    <img src={mint.icon} alt={mint.label} className='w-6 mr-3' />
                                                    <img src={getChainLogo(mint.chainType)} alt={getChainName(mint.chainType)} className='absolute -right-1 -bottom-1 w-3' />
                                                </div>
                                                <span>{mint.label}</span>

                                                <ChevronDownIcon
                                                    className="-mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                                    aria-hidden="true"
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 mt-2 w-28 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[10]">
                                                <div className="px-1 py-1">
                                                    {
                                                        sellTokens.map((tokenId: TokenType, idx: number) =>
                                                            <Menu.Item key={idx}>
                                                                {({ active }) => (
                                                                    <button
                                                                        className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                        onClick={() => handleToken(tokenId)}
                                                                    >
                                                                        <div className='relative'>
                                                                            <img src={SALE_TOKEN_LIST[tokenId].icon} alt={SALE_TOKEN_LIST[tokenId].label} className='w-6 mr-2' />
                                                                            <img src={getChainLogo(SALE_TOKEN_LIST[tokenId].chainType)} alt={getChainName(SALE_TOKEN_LIST[tokenId].chainType)} className='absolute right-1 -bottom-1 w-4' />
                                                                        </div>
                                                                        {SALE_TOKEN_LIST[tokenId].label}
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        )
                                                    }
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>

                                </div>
                            </div>

                            <div className='my-4 text-lg text-red-600'>
                                {errorMsg}
                            </div>

                        </Dialog.Description>

                        <div className='text-center mt-4'>
                            {
                                (mint.chainType === ChainType.ETH
                                    || mint.chainType === ChainType.BSC) ?
                                    <>
                                        {
                                            isConnected ?
                                                <button type='button' className='text-lg text-black font-semibold bg-secondary py-2 px-6 rounded-lg cursor-pointer hover:opacity-80' onClick={handlePresale} disabled={processing}>
                                                    {processing ? "Processing" : "Confirm"}
                                                </button>
                                                :
                                                <button type='button' className='text-lg text-black font-semibold bg-secondary py-2 px-6 rounded-lg cursor-pointer hover:opacity-80' onClick={handleConnect} disabled={processing}>
                                                    Connect Wallet
                                                </button>
                                        }
                                    </>
                                    :
                                    <>
                                        {
                                            publicKey ?
                                                <button type='button' className='text-lg text-black font-semibold bg-secondary py-2 px-6 rounded-lg cursor-pointer hover:opacity-80' onClick={handlePresale} disabled={processing}>
                                                    {processing ? "Processing" : "Confirm"}
                                                </button>
                                                :
                                                <WalletModalButton className='text-center mx-auto' />
                                        }
                                    </>
                            }
                        </div>

                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    )
}