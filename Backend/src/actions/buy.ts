import * as anchor from '@project-serum/anchor';
import { SYSVAR_RENT_PUBKEY, Keypair, PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID, NATIVE_MINT, getAssociatedTokenAddress } from "@solana/spl-token";
import { Program } from '@project-serum/anchor';
import { SolmatePresale } from '../constants/presale_idl';
import { findGlobalState, findSaleSate } from '../utils';


export async function buy(
    program: Program<SolmatePresale>,
    authority: PublicKey,
    buyer: PublicKey,
    mint: PublicKey,
    vault: PublicKey,

    amount: anchor.BN,
    tokenAmount: anchor.BN
) {
    const globalState = findGlobalState();
    const saleState = findSaleSate(buyer);

    const isNative = mint.equals(NATIVE_MINT);
    const tokenAccount = isNative ? buyer : (await getAssociatedTokenAddress(mint, buyer, true));
    const vaultAccount = isNative ? vault : (await getAssociatedTokenAddress(mint, vault, true));
    console.log(authority.toString(), mint.toString(), tokenAccount.toString(), vaultAccount.toString());

    const tx = await program.methods.buy(tokenAmount, amount)
        .accounts({
            authority,
            buyer,
            mint,
            globalState,
            saleState,
            tokenAccount,
            vaultAccount,
            systemProgram: anchor.web3.SystemProgram.programId,
            tokenProgram: TOKEN_PROGRAM_ID,
            rent: SYSVAR_RENT_PUBKEY,
        });

    return tx.instruction();

};
