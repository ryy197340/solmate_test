import { ChainType, Token, TokenType } from "../constants/types";

export const getChainName = (chainId: ChainType) => {
    if (chainId === ChainType.ETH) {
        return 'ETH';
    }
    if (chainId === ChainType.BSC) {
        return 'BSC';
    }
    if (chainId === ChainType.SOL) {
        return 'SOL';
    }
}

export const getChainLogo = (chainId: ChainType) => {
    if (chainId === ChainType.ETH) {
        return '/assets/icon_eth.svg';
    }
    if (chainId === ChainType.BSC) {
        return '/assets/icon_bsc.svg';
    }
    if (chainId === ChainType.SOL) {
        return '/assets/icon_sol.svg';
    }
}