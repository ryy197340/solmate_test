import { NextFunction, Request, Response } from "express";
import BigNumber from "bignumber.js";
import { JsonRpcProvider } from "@ethersproject/providers";
import { Contract, ethers, Wallet } from "ethers";

import { PublicKey, Connection, Keypair } from '@solana/web3.js'
import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';

import { BSC_CHAIN, BSC_CHAIN_ID, BSC_CONTRACT_ADDR, EVM_AUTHORITY_KEY, ETH_CHAIN, ETH_CHAIN_ID, ETH_CONTRACT_ADDR, PRESALE_PRICE, SERSH_DECIMALS, SOL_CHAIN, TOTAL_SUPPLY, ZERO_ADDRESS, SOL_AUTHORITY_KEY, SOL_VAULT_ADDRESS, SOL_RPC_URL, PRESALE_PROGRAM_ID } from "../constants";
import Presale_ABI from "../constants/presale.json";
import ERC20_ABI from '../constants/erc20.json'
import { depositFunc, getContractAddress, getEvmTransaction, getRpcUrl, getSolTransaction, getUsdPrice } from "../utils";
import logger from "../utils/logger";
import { getRepository } from "typeorm";
import { Transactions } from "../entity/Transactions";
import { StatusType } from "../models/types";
import { base64, formatUnits } from "ethers/lib/utils";
import { buy } from "../actions/buy";
import { BN } from "bn.js";
import { IDL, SolmatePresale } from "../constants/presale_idl";
import { NATIVE_MINT } from "@solana/spl-token";

export const getPresaleInfo = async function (req: Request, res: Response, next: NextFunction) {

    const transactionRepo = getRepository(Transactions);
    const transactions = await transactionRepo.find({
        status: StatusType.Successed
    });

    let currentSupply = 0;
    for (const transaction of transactions) {
        currentSupply += transaction.amount;
    }

    return res.status(200)
        .json({
            price: PRESALE_PRICE,
            totalSupply: TOTAL_SUPPLY,
            currentSupply
        })
}

export const getMyTokenSaleInfo = async function (req: Request, res: Response, next: NextFunction) {
    const myWalletAddress = req.params.walletaddress;
    const transactionRepo = getRepository(Transactions);
    const myTransactions = await transactionRepo.find({
        from: myWalletAddress,
        status: StatusType.Successed
    });

    let amountSolMate, amountETH, amountBNB, amountSOL, amountStables = 0;
    await myTransactions.map(el => {
        if(el.chain_id == ETH_CHAIN_ID && el.token_address == ZERO_ADDRESS){
            amountSolMate = amountSolMate + el.amount;
            amountETH = amountETH + el.token_amount;
        }
        if(el.chain_id == BSC_CHAIN_ID && el.token_address == ZERO_ADDRESS){
            amountSolMate = amountSolMate + el.amount;
            amountBNB  = amountBNB + el.token_amount;
        }
        if(el.chain_id == SOL_CHAIN && el.token_address == ZERO_ADDRESS){
            amountSolMate = amountSolMate + el.amount;
            amountSOL = amountSOL + el.token_amount;
        }
        if(el.token_address != ZERO_ADDRESS){
            amountSolMate = amountSolMate + el.amount;
            amountStables = amountStables + el.token_amount;
        }
    })

    return res.status(200)
            .json({
                amountSolMate,
                amountETH,
                amountBNB,
                amountSOL,
                amountStables,
                myTransactions
            })

}

export const getPurchaseInfo = async function (req: Request, res: Response, next: NextFunction) {

    const transactionRepo = getRepository(Transactions);
    const transactions = await transactionRepo.find({
        status: StatusType.Successed
    });

    return res.status(200)
        .json(transactions)
}

export const generateSignature = async function (req: Request, res: Response, next: NextFunction) {

    const chain = req.body.chain;
    const from = req.body.from;
    const tokenAddress = req.body.token_address;
    const _amount = Number.parseFloat(req.body.amount);

    if (chain != ETH_CHAIN
        && chain != BSC_CHAIN
        && chain != SOL_CHAIN) {
        return res.status(500)
            .json({
                error: 'Invalid chain'
            })
    }

    const chainId = chain === ETH_CHAIN ? ETH_CHAIN_ID :
        (chain === BSC_CHAIN ? BSC_CHAIN_ID : null);
    let presaleAddress = getContractAddress(chainId);

    const domainData = {
        name: "SolmatePresale",
        version: "1.0.0",
        chainId: chainId,
        verifyingContract: presaleAddress,
    };

    try {
        const provider = new JsonRpcProvider(getRpcUrl(chainId));
        const presaleContract = new Contract(presaleAddress, Presale_ABI, provider)
        const nonce = (await presaleContract.getNonce(from)).toNumber();
        const deadline = Math.ceil(Date.now() / 1000) + 60 * 5;

        let amount = ethers.utils.parseUnits(_amount.toFixed(SERSH_DECIMALS), SERSH_DECIMALS);

        let tokenAmount;
        if (tokenAddress == ZERO_ADDRESS) {
            const usdPrice = await getUsdPrice(chain);
            if (!usdPrice) {
                return res.status(500)
                    .json({
                        error: "Get error while generate signature. Please try again later."
                    })
            }

            tokenAmount = ethers.utils.parseEther((_amount / PRESALE_PRICE / usdPrice).toFixed(18));
        }
        else {
            const tokenContract = new Contract(tokenAddress, ERC20_ABI, provider);
            const tokenDecimals = await tokenContract.decimals();

            tokenAmount = ethers.utils.parseUnits((_amount / PRESALE_PRICE).toFixed(tokenDecimals), tokenDecimals);
        }

        var message = {
            from,
            tokenAddress,
            tokenAmount,
            amount,
            deadline,
            nonce
        };

        const signer = new Wallet(EVM_AUTHORITY_KEY, provider);
        const signature = await signer._signTypedData(
            domainData,
            depositFunc,
            message
        );

        return res.status(200)
            .json({
                amount,
                tokenAmount,
                signature,
                deadline
            })
    }
    catch (ex) {
        logger.error(`Generate signature - ${ex}`)
        return res.status(500)
            .json({
                error: ex.toString()
            })
    }

}

export const requestSOL = async function (req: Request, res: Response, next: NextFunction) {

    try {
        const connection = new Connection(SOL_RPC_URL);
        const provider = new anchor.AnchorProvider(
            connection,
            new anchor.Wallet(Keypair.generate()),
            { commitment: 'confirmed' }
        );

        const program = new Program(IDL, PRESALE_PROGRAM_ID, provider);
        const buyer = new PublicKey(req.body.from);
        const mint = new PublicKey(req.body.tokenAddress);

        const _amount = Number.parseFloat(req.body.amount);
        let amount = ethers.utils.parseUnits(_amount.toFixed(SERSH_DECIMALS), SERSH_DECIMALS);

        let tokenAmount;
        if (mint.equals(NATIVE_MINT)) {
            const usdPrice = await getUsdPrice(SOL_CHAIN);
            if (!usdPrice) {
                return res.status(500)
                    .json({
                        error: "Get error while generate trasnaction. Please try again later."
                    })
            }

            tokenAmount = ethers.utils.parseUnits((_amount / PRESALE_PRICE / usdPrice).toFixed(9), 9);
        }
        else {
            tokenAmount = ethers.utils.parseUnits((_amount / PRESALE_PRICE).toFixed(6), 6);
        }

        const buyIx = await buy(program, SOL_AUTHORITY_KEY.publicKey, buyer, mint, SOL_VAULT_ADDRESS, new BN(amount.toString()), new BN(tokenAmount.toString()));

        // Generate new transaction with buyer as payer
        const { blockhash } = await provider.connection.getLatestBlockhash("finalized");
        const buyTx = new anchor.web3.Transaction({
            recentBlockhash: blockhash,
            feePayer: buyer
        });
        buyTx.add(buyIx);

        // Sign with authority pubkey in BE
        buyTx.partialSign(SOL_AUTHORITY_KEY);

        // Serialize transaction in BE
        const serializeTx = buyTx.serialize({
            requireAllSignatures: false
        });
        // Send encoded bytes to FE
        const encodedTx = base64.encode(serializeTx);

        return res.status(200)
            .json({
                tx: encodedTx
            })
    }
    catch (ex) {
        logger.error(`Request SOL transaction - ${ex}`);
        return res.status(500)
            .json({
                error: ex.toString()
            })
    }

}

export const processEVM = async function (req: Request, res: Response, next: NextFunction) {

    const chain = req.body.chain;
    const tx_hash = req.body.tx_hash as string;

    if (chain != ETH_CHAIN
        && chain != BSC_CHAIN) {
        return res.status(500)
            .json({
                error: 'Invalid chain'
            })
    }
    const chainId = chain === ETH_CHAIN ? ETH_CHAIN_ID :
        (chain === BSC_CHAIN ? BSC_CHAIN_ID : null);

    const transRepo = getRepository(Transactions);

    try {
        const existRecord = await transRepo.findOne({
            tx_hash
        });
        if (existRecord) {
            return res.status(400)
                .json({
                    error: 'Already requested transaction.'
                })
        }

        const record = await getEvmTransaction(chainId, tx_hash);
        if (record) {
            await transRepo.save(transRepo.create({
                tx_hash: tx_hash,
                chain_id: chain,
                from: record.from,
                token_address: record.tokenAddress,
                token_amount: record.tokenAmount,
                amount: record.amount,
                status: StatusType.Successed
            }));

            logger.info(`Processing EVM - ${tx_hash} - ${record.amount} Solmate purchased}`);
            return res.status(200)
                .json({
                    msg: 'Request has been approved'
                })
        }
        else {
            logger.error(`Processing EVM - ${tx_hash}`);
            return res.status(500)
                .json({
                    error: 'Unknown request'
                })
        }
    }
    catch (ex) {
        logger.error(`Processing EVM - ${tx_hash} - ${ex}`);
        return res.status(500)
            .json({
                error: ex.toString()
            })
    }

}

export const processSOL = async function (req: Request, res: Response, next: NextFunction) {

    const tx_hash = req.body.tx_hash as string;

    const transRepo = getRepository(Transactions);

    try {
        const existRecord = await transRepo.findOne({
            tx_hash
        });
        if (existRecord) {
            return res.status(400)
                .json({
                    error: 'Already requested transaction.'
                })
        }

        const record = await getSolTransaction(tx_hash);
        if (record) {
            await transRepo.save(transRepo.create({
                tx_hash: tx_hash,
                chain_id: SOL_CHAIN,
                from: record.from,
                token_address: record.tokenAddress,
                token_amount: record.tokenAmount,
                amount: record.amount,
                status: StatusType.Successed
            }));

            logger.info(`Processing SOL - ${tx_hash} - ${record.amount} Solmate purchased}`);
            return res.status(200)
                .json({
                    msg: 'Request has been approved'
                })
        }
        else {
            logger.error(`Processing SOL - ${tx_hash}}`);
            return res.status(500)
                .json({
                    error: 'Unknown request'
                })
        }
    }
    catch (ex) {
        logger.error(`Processing SOL - ${tx_hash}} - ${ex}`);
        return res.status(500)
            .json({
                error: ex.toString()
            })
    }

}
