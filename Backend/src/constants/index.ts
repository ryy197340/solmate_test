import { bs58 } from '@project-serum/anchor/dist/cjs/utils/bytes';
import { PublicKey, Keypair } from '@solana/web3.js'

export const ETH_CHAIN = 1;
export const BSC_CHAIN = 2;
export const SOL_CHAIN = 3;

export const MAIN_RPC_URL = process.env.MAIN_RPC_URL;
export const ETH_RPC_URL = process.env.ETH_RPC_URL;
export const ETH_CHAIN_ID = Number(process.env.ETH_CHAIN_ID);
export const ETH_CONTRACT_ADDR = process.env.ETH_CONTRACT_ADDR;

export const BSC_RPC_URL = process.env.BSC_RPC_URL;
export const BSC_CHAIN_ID = Number(process.env.BSC_CHAIN_ID);
export const BSC_CONTRACT_ADDR = process.env.BSC_CONTRACT_ADDR;

export const EVM_AUTHORITY_KEY = process.env.EVM_AUTHORITY_KEY;
export const SOL_AUTHORITY_KEY = Keypair.fromSecretKey(bs58.decode(process.env.SOL_AUTHORITY_KEY));
export const SOL_VAULT_ADDRESS = new PublicKey(process.env.SOL_VAULT_ADDRESS);

export const SOL_RPC_URL = process.env.SOL_RPC_URL;
export const PRESALE_PROGRAM_ID = new PublicKey(process.env.PRESALE_PROGRAM_ID);

export const SERSH_DECIMALS = Number(process.env.SERSH_DECIMALS);
export const USD_DECIMALS = Number(process.env.USD_DECIMALS);

export const PRESALE_PRICE = Number(process.env.PRESALE_PRICE);
export const TOTAL_SUPPLY = Number(process.env.TOTAL_SUPPLY);


type AddressMap = { [chainId: number]: string }
export const PRICE_FEED_ADDRESS: AddressMap = {
    [ETH_CHAIN]: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    [BSC_CHAIN]: "0x14e613AC84a31f709eadbdF89C6CC390fDc9540A",
    [SOL_CHAIN]: "0x4ffC43a60e009B551865A93d232E33Fce9f01507",
}

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const PREFIX = 'SOLMATE';
export const VAULT = 'VAULT';
export const SALE = 'SALE';