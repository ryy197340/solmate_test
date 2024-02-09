import { JsonRpcProvider } from "@ethersproject/providers";
import base58 from "bs58";
import { BigNumber, Contract } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { BSC_CHAIN, BSC_CHAIN_ID, BSC_CONTRACT_ADDR, BSC_RPC_URL, ETH_CHAIN, ETH_CHAIN_ID, ETH_CONTRACT_ADDR, ETH_RPC_URL, MAIN_RPC_URL, PREFIX, PRESALE_PROGRAM_ID, PRICE_FEED_ADDRESS, SALE, SERSH_DECIMALS, SOL_RPC_URL, USD_DECIMALS, ZERO_ADDRESS } from "../constants";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { PublicKey, Connection, LAMPORTS_PER_SOL, Keypair } from '@solana/web3.js';

import logger from "./logger";
import ERC20_ABI from '../constants/erc20.json'
import AGGREGATOR_ABI from '../constants/chainlink.json'
import { SolanaParser } from "./solana-parser";
import { IDL, SolmatePresale } from "../constants/presale_idl";
import { NATIVE_MINT } from "@solana/spl-token";



const connection = new Connection(SOL_RPC_URL, {
    commitment: 'confirmed'
});
const provider = new anchor.AnchorProvider(
    connection,
    new anchor.Wallet(Keypair.generate()),
    { commitment: 'confirmed' }
);
const program = new Program<SolmatePresale>(IDL, PRESALE_PROGRAM_ID, provider);
const parser = new SolanaParser([
    {
        idl: IDL,
        programId: PRESALE_PROGRAM_ID
    }
])

export const depositFunc = {
    DepositRequest: [
        { name: "from", type: "address" },
        { name: "tokenAddress", type: "address" },
        { name: "tokenAmount", type: "uint256" },
        { name: "amount", type: "uint256" },
        { name: "deadline", type: "uint256" },
        { name: "nonce", type: "uint256" },
    ]
};
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export const getRpcUrl = (chainId: number) => {
    if (chainId == ETH_CHAIN_ID) {
        return ETH_RPC_URL;
    }
    else if (chainId == BSC_CHAIN_ID) {
        return BSC_RPC_URL;
    }

    return null;
}

export const getContractAddress = (chainId: number) => {
    if (chainId == ETH_CHAIN_ID) {
        return ETH_CONTRACT_ADDR;
    }
    else if (chainId == BSC_CHAIN_ID) {
        return BSC_CONTRACT_ADDR;
    }

    return null;
}

export const getUsdPrice = async (
    chainType: number
) => {
    try {
        const provider = new JsonRpcProvider(MAIN_RPC_URL);
        const contract = new Contract(PRICE_FEED_ADDRESS[chainType], AGGREGATOR_ABI, provider);
        const roundData = await contract.latestRoundData()
        const price = (parseFloat((roundData.answer)) / 100000000.0)
        return price;
    }
    catch (ex) {
        logger.error(`getUsdPrice - ${chainType} - ${ex.toString()}`);
        return null;
    }
}

export const getEvmTransaction = async (
    chainId: number,
    txHash: string
) => {
    try {
        const provider = new JsonRpcProvider(getRpcUrl(chainId));
        // Try 3 times for get result
        let tx;
        for (let i = 0; i < 3; i++) {
            tx = await provider.getTransactionReceipt(txHash);
            if (tx) {
                break;
            }

            await delay(3000);
        }

        if (tx === null) {
            return null;
        }

        const to = getContractAddress(chainId);
        if (tx.to != to) {
            return false;
        }
        if (tx.status != 1) {
            return false;
        }

        const log = tx.logs.filter(log => log.address == to);
        if (!log || log.length == 0) {
            return false;
        }

        const data = log[0].data.substr(2);
        if (data.length != 256) {
            return false;
        }

        let idx = 24;
        const from = `0x${data.substr(idx, 40)}`;
        idx += 64;
        const tokenAddress = `0x${data.substr(idx, 40)}`;
        idx += 40;
        const tokenAmountHex = `0x${data.substr(idx, 64)}`;
        idx += 64;
        const amountHex = `0x${data.substr(idx, 64)}`;

        let tokenAmount = 0;
        if (tokenAddress != ZERO_ADDRESS) {
            const tokenContract = new Contract(tokenAddress, ERC20_ABI, provider)
            const decimals = await tokenContract.decimals();
            tokenAmount = Number(formatUnits(tokenAmountHex, decimals));
        }
        else {
            tokenAmount = Number(formatUnits(tokenAmountHex, 18));
        }

        let amount = Number(formatUnits(amountHex, 9));

        return {
            hash: tx.transactionHash,
            from: from,
            tokenAddress,
            tokenAmount,
            amount,
        };
    }
    catch (ex) {
        logger.error(`getEvmTransaction - ${txHash} - ${ex.toString()}`);
        return null;
    }
}

export const getSolTransaction = async (
    txHash: string
) => {
    try {
        let parsedTransactions = [];
        parsedTransactions = await parser.parseTransaction(connection, txHash, false);
        if (!parsedTransactions || parsedTransactions.length == 0) {
            return null;
        }

        const parsedTransaction = parsedTransactions[0];
        if (parsedTransaction.name != 'buy') {
            return false;
        }

        const from = parsedTransaction.accounts.filter(account => account.name == 'buyer')[0].pubkey.toString();
        const tokenAddress = parsedTransaction.accounts.filter(account => account.name == 'mint')[0].pubkey.toString();
        const isNative = tokenAddress == NATIVE_MINT.toString();
        const tokenAmount = (parsedTransaction.args as any).tokenAmount.toNumber() / Math.pow(10, isNative ? 9 : USD_DECIMALS);
        const amount = (parsedTransaction.args as any).amount.toNumber() / Math.pow(10, SERSH_DECIMALS);

        return {
            hash: txHash,
            from,
            tokenAddress,
            tokenAmount,
            amount,
        };
    }
    catch (ex) {
        logger.error(`getSolTransaction - ${txHash} - ${ex.toString()}`);
        return null;
    }
}

export const findGlobalState = (): PublicKey => {
    let [pubkey, bump] = findProgramAddressSync(
        [Buffer.from(PREFIX)],
        PRESALE_PROGRAM_ID,
    );

    return pubkey;
}


export const findSaleSate = (authority: PublicKey): PublicKey => {
    let [pubkey, bump] = findProgramAddressSync(
        [Buffer.from(PREFIX), authority.toBuffer(), Buffer.from(SALE)],
        PRESALE_PROGRAM_ID,
    );

    return pubkey;
}


