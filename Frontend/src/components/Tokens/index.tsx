import { FC, useEffect, useState } from 'react';
import BorderButton from '../BorderButton';

import "./index.css";

const Tokens: FC = () => {


    return (
        <div className='p-4 bg-gradient-to-r from-white to-sky-400 text-xs lg:text-basic '>
            <p className='font-bold text-xl'>Tokens</p>
            <table className="table-fixed text-center">
                <thead >
                    <tr className=''>
                    <th className='w-20 md:w-36 text-left'>Name</th>
                    <th className='w-20 md:w-36'>Balance</th>
                    <th className='w-20 md:w-36'>Total Value</th>
                    <th className='w-20 md:w-36'>Trade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td className='p-2'></td></tr>
                </tbody>
                <tbody className='m-4'>
                    <tr >
                    <td className='text-left'><img src='/assets/img/Bitcoin.png' className='w-8 mr-2 inline'/><span className='hidden md:inline-block'>Bitcoin</span></td>
                    <td>0,04321</td>
                    <td>$2,340.32</td>
                    <td><button>Trade</button></td>
                    </tr>
                    <tr className='pt-4'>
                    <td className='text-left'><img src='/assets/img/Ethereum.png' className='w-8 mr-2 inline'/><span className='hidden md:inline-block'>Ethereum</span></td>
                    <td>32,234</td>
                    <td>$5,340.32</td>
                    <td><button>Trade</button></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default Tokens;
