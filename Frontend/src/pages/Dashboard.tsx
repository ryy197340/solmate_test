import * as anchor from '@project-serum/anchor';
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey';
import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { DashHeader } from '../components/DashHeader';
import DashHome from '../components/DashHome';
import DashTransaction from '../components/DashTransaction';

import NavBar from '../components/NavBar';
import { TopNavigator } from '../components/TopNavigator';
import CustomParticles from '../components/CustomParticles';

import { TOKEN_DECIMALS, PRESALE_PREFIX, PRESALE_PROGRAM_ID, PRESALE_SALE } from '../constants';
import { IDL as SolmatePresaleIDL, SolmatePresale } from '../constants/presale_idl';

import { usePresaleProgram } from '../hooks';
import { ParsedIdlInstruction, SolanaParser } from '../utils/solana-parser';


import "./index.css";
import { PresaleState } from '../constants/types';

const parser = new SolanaParser([
    {
        idl: SolmatePresaleIDL,
        programId: PRESALE_PROGRAM_ID
    }
]);

interface SaleHistory {
    mint: PublicKey;
    currency: string;
    buyAmount: number;
    sellAmount: number;
    saleAt: string;
}

const Dashboard: FC = () => {

    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const anchorWallet = useAnchorWallet();
    const program = usePresaleProgram(connection, anchorWallet);

    const [presaleState, setPresaleState] = useState<PresaleState>();
    const [presaleAmount, setPresaleAmount] = useState<anchor.BN>();
    const [rewardAmount, setRewardAmount] = useState<anchor.BN>();

    const [isHistory, setHistoryOpen] = useState<boolean>(false);
    const [processing, setProcessing] = useState<boolean>(false);
    const [histories, setHistories] = useState<Array<SaleHistory>>([]);

    const { id } = useParams();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, [])

    useEffect(() => {
    }, [
        program, publicKey
    ])

    return (
        <>
            <div className='dashboard relative min-h-screen flex flex-col break-words min-h-screen'>
                <CustomParticles />
                <div className='flex mb-24 grow'>
                    <NavBar />
                    <div className='w-full'>
                        <DashHeader />
                        {

                            id == 'transaction' ?
                                <DashTransaction />
                                :
                                <DashHome />
                        }
                    </div>
                </div>
                <TopNavigator />
                <Footer />

                <div className='footer-overlay absolute top-0 w-full min-h-screen h-full'></div>

            </div>
        </>

    );
};

export default Dashboard;
