import { NATIVE_MINT } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { ChainType, TokenType, Token } from "./types";

export const API_URL = process.env.REACT_APP_API_URL ?? "";

export const ETH_CHAIN_ID = parseInt(process.env.REACT_APP_ETH_CHAIN_ID ?? "1");
export const ETH_PRESALE_ADDRESS = process.env.REACT_APP_ETH_PRESALE_ADDRESS ?? "";
export const ETH_USDC = process.env.REACT_APP_ETH_USDC ?? "";
export const ETH_USDT = process.env.REACT_APP_ETH_USDT ?? "";

export const BSC_CHAIN_ID = parseInt(process.env.REACT_APP_BSC_CHAIN_ID ?? "56");
export const BSC_PRESALE_ADDRESS = process.env.REACT_APP_BSC_PRESALE_ADDRESS ?? "";
export const BSC_USDC = process.env.REACT_APP_BSC_USDC ?? "";
export const BSC_USDT = process.env.REACT_APP_BSC_USDT ?? "";

export const PRESALE_PROGRAM_ID = new PublicKey(process.env.REACT_APP_SOL_PRESALE_ADDRESS ?? "");
export const SOL_USDC = process.env.REACT_APP_SOL_USDC ?? "";
export const SOL_USDT = process.env.REACT_APP_SOL_USDT ?? "";

export const TOKEN_DECIMALS = new BN(1_000_000_000);
export const PRICE_DECIMALS = 1_000;
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

type AddressMap = { [chainId: number]: string }
export const PRICE_FEED_ADDRESS: AddressMap = {
    [ChainType.ETH]: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    [ChainType.BSC]: "0x14e613AC84a31f709eadbdF89C6CC390fDc9540A",
    [ChainType.SOL]: "0x4ffC43a60e009B551865A93d232E33Fce9f01507",
}

export const SALE_TOKEN_LIST: { [key in TokenType]: Token; } = {
    [TokenType.USDC_ETH]: {
        chainType: ChainType.ETH,
        chainId: ETH_CHAIN_ID,
        label: 'USDC',
        icon: '/assets/icon_usdc.svg',
        address: ETH_USDC,
        isNative: false
    },
    [TokenType.USDT_ETH]: {
        chainType: ChainType.ETH,
        chainId: ETH_CHAIN_ID,
        label: 'USDT',
        icon: '/assets/icon_usdt.svg',
        address: ETH_USDT,
        isNative: false
    },
    [TokenType.NATIVE_ETH]: {
        chainType: ChainType.ETH,
        chainId: ETH_CHAIN_ID,
        label: 'ETH',
        icon: '/assets/icon_eth.svg',
        address: ZERO_ADDRESS,
        isNative: true
    },
    [TokenType.USDC_BSC]: {
        chainType: ChainType.BSC,
        chainId: BSC_CHAIN_ID,
        label: 'USDC',
        icon: '/assets/icon_usdc.svg',
        address: BSC_USDC,
        isNative: false
    },
    [TokenType.USDT_BSC]: {
        chainType: ChainType.BSC,
        chainId: BSC_CHAIN_ID,
        label: 'USDT',
        icon: '/assets/icon_usdt.svg',
        address: BSC_USDT,
        isNative: false
    },
    [TokenType.NATIVE_BSC]: {
        chainType: ChainType.BSC,
        chainId: BSC_CHAIN_ID,
        label: 'BNB',
        icon: '/assets/icon_bsc.svg',
        address: ZERO_ADDRESS,
        isNative: true
    },
    [TokenType.USDC_SOL]: {
        chainType: ChainType.SOL,
        label: 'USDC',
        icon: '/assets/icon_usdc.svg',
        address: SOL_USDC,
        isNative: false
    },
    [TokenType.USDT_SOL]: {
        chainType: ChainType.SOL,
        label: 'USDT',
        icon: '/assets/icon_usdt.svg',
        address: SOL_USDT,
        isNative: false
    },
    [TokenType.NATIVE_SOL]: {
        chainType: ChainType.SOL,
        label: 'SOL',
        icon: '/assets/icon_sol.svg',
        address: NATIVE_MINT.toString(),
        isNative: true
    },
};


export const PRESALE_PREFIX = 'SOLMATE';
export const PRESALE_VAULT = 'VAULT';
export const PRESALE_SALE = 'SALE';