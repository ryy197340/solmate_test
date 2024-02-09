import { FC, useEffect, useState } from 'react';
import BorderButton from '../BorderButton';

import "./index.css";

const DemoStage1: FC = () => {


    return (
        <div className='bg-gradient-to-r from-white to-sky-400 text-black p-4'>
            <div className='px-4 pb-4'>
                <p className='font-bold text-xl'>Demo Stage 1</p>
                <div className='mx-8'>
                    <p className='mt-1'>TR3</p>
                    <p className='mt-1'>0.2948938439038  USD</p>
                    <p className='text-xs mt-1'>1USD = 0.00031ETH</p>
                </div>
            </div>
            <div className='flex p-4'>
                <div className='w-1/3 flex text-center'>
                    <div>
                        <p>~</p>
                        <p>USD</p>
                    </div>
                    <div className='grow-1'>

                    </div>
                </div>
                <div className='w-1/3 flex text-center'>
                    <div>
                        <p>~</p>
                        <p>ETH</p>
                    </div>
                    <div className='grow-1'>

                    </div>
                </div>
                <div className='w-1/3 flex text-center'>
                    <div>
                        <p>~</p>
                        <p>BTC</p>
                    </div>
                    <div className='grow-1'>

                    </div>
                </div>
            </div>

            <div>
                <BorderButton mode={1} text='Buy Token Now'/>
            </div>
        </div>
    );
};

export default DemoStage1;
