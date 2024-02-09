import { FC, useEffect, useState } from 'react';
import BorderButton from '../BorderButton';
import { usePresaleInfo } from '../../hooks/usePresaleInfo';
import "./index.css";

const TokenSaleProgress: FC = () => {
    const {price, currentSupply, totalSupply} = usePresaleInfo(false);

    return (
        <div className='bg-gradient-to-r from-white to-sky-400 text-black p-4 px-8'>
            <div className='pb-4'>
                <p className='font-bold text-xl'>Token Sales Progress</p>
            </div>
        
            <div className='flex text-xs'>
                <div className='w-1/2'>
                    <p>Raised Amount</p>
                    <p>{currentSupply} TR3</p>
                </div>
                <div className='w-1/2 text-right'>
                    <p>Total Token</p>
                    <p>{totalSupply} TR3</p>
                </div>
                
            </div>
            <img src='/assets/img/Stick.png' className='w-full '/>
            <p>Sales End</p> 
            <div className='flex text-center'>
                <div className='w-1/4'>
                    <div className='m-2 border border-black'>
                        <p>{'134'}</p>
                        <p className='text-xs'>{'DAY'}</p>
                    </div>
                </div>
                <div className='w-1/4'>
                    <div className='m-2 border border-black'>
                        <p>{'22'}</p>
                        <p className='text-xs'>{'HOUR'}</p>
                    </div>
                </div>
                <div className='w-1/4'>
                    <div className='m-2 border border-black'>
                        <p>{'87'}</p>
                        <p className='text-xs'>{'MIN'}</p>
                    </div>
                </div>
                <div className='w-1/4'>
                    <div className='m-2 border border-black'>
                        <p>{'42'}</p>
                        <p className='text-xs'>{'SEC'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenSaleProgress;
