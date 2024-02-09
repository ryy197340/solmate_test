import { BN } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";

export enum ChainType {
    ETH = 1,
    BSC = 2,
    SOL = 3
};

export enum TokenType {
    USDC_ETH = 'USDC-ETH',
    USDT_ETH = 'USDT-ETH',
    NATIVE_ETH = 'NATIVE-ETH',
    USDC_BSC = 'USDC-BSC',
    USDT_BSC = 'USDT-BSC',
    NATIVE_BSC = 'NATIVE-BSC',
    USDC_SOL = 'USDC-SOL',
    USDT_SOL = 'USDT-SOL',
    NATIVE_SOL = 'NATIVE-SOL',
};

export interface Token {
    chainType: ChainType;
    chainId?: number;
    label: string;
    icon: string;
    address: string;
    isNative: boolean;
}

export interface PresaleMint {
    mint: PublicKey;
    decimals: BN;
    price: BN;
}

export interface PresaleState {
    price: number;
    currentSupply: number;
    totalSupply: number;
}

export interface PurchaseState {
    id: number;
    chainId: number;
    transaction: String;
    from: String,
    tokenAddress: String;
    tokenAmount: String;
    Amount: String;
    status: number;
    createDate: String;
}

export interface UserPresaleState {
    authority: PublicKey;
    amount: BN;
}