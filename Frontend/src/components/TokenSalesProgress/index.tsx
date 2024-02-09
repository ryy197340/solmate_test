import { FC, useEffect, useState } from 'react';
import BorderButton from '../BorderButton';

import "./index.css";

const AccountStatus: FC = () => {


    return (
        <div className='bg-gradient-to-r from-white to-sky-400 text-black p-4'>
            <div className='px-4 pb-4'>
                <p className='font-bold text-xl'>Your Account Status</p>
            </div>
        
            <div className='flex'>
                <BorderButton mode={1} text='Email Verified'/>
                <BorderButton mode={0} text='Submit KYC'/>
                
                <div className='grow-1'></div>
            </div>

            <div className='mt-8'>
                <p>Receiving Wallet</p>
            </div>

            <div className='mt-8'>
                <p>{'0x73ba9c...1a67djle'}  <span className='font-bold ml-8'>EDIT</span></p>
            </div>
        </div>
    );
};

export default AccountStatus;
