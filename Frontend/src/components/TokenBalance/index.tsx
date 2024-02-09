import { FC, useEffect, useState } from 'react';
import BorderButton from '../BorderButton';
import { Link } from 'react-router-dom';
import { useWallet } from '@solana/wallet-adapter-react';
import {useMyPurchaseInfo} from '../../hooks/useMyPurchaseInfo';
import "./index.css";

const TokenBalance: FC = () => {
    const { publicKey } = useWallet();
    let {myTransactions, amounts} = useMyPurchaseInfo(publicKey?.toBase58() || "");

    return (
        <div className='bg-strongBlue text-white p-4'>
            <div className='flex'>
                <img src='/assets/img/Token_Balance_Logo.png' className='mx-4 w-14'/>
                <div className='mx-8'>
                    <p className='text-lg'>Token Balance</p>
                    <p>{amounts.solmate || 0} TR3</p>
                </div>
            </div>
            <p className='ml-8 mt-8'>Your Contribution in</p>
            <div className='flex p-4'>
                <div className='w-1/4 flex text-center'>
                    <div>
                        <p>{amounts.stables || 0}</p>
                        <p>Stables</p>
                    </div>
                    <div className='grow-1'>

                    </div>
                </div>
                <div className='w-1/4 flex text-center'>
                    <div>
                        <p>{amounts.eth || 0}</p>
                        <p>ETH</p>
                    </div>
                    <div className='grow-1'>

                    </div>
                </div>
                <div className='w-1/4 flex text-center'>
                    <div>
                        <p>{amounts.bnb || 0}</p>
                        <p>BNB</p>
                    </div>
                    <div className='grow-1'>

                    </div>
                </div>
                <div className='w-1/4 flex text-center'>
                    <div>
                        <p>{amounts.sol || 0}</p>
                        <p>SOL</p>
                    </div>
                    <div className='grow-1'>

                    </div>
                </div>
            </div>

            <div className='flex items-center'>
                <BorderButton mode={0} text='View History'/>
                <Link to='#' className=' underline decoration-solid'>View Transactions</Link>
            </div>
        </div>
    );
};

export default TokenBalance;
