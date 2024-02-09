import { FC, useEffect, useState } from 'react';
import { usePurchaseInfo } from '../../hooks/usePurchaseInfo';
import { PurchaseState } from "../../constants/types";
import "./index.css";

const DashTransaction: FC = () => {

    const purchaseInfo = usePurchaseInfo(true);

    return (
        <div className='grow text-primary p-4 px-4 lg:px-16'>

        <div className='mt-12'>
            <p className='text-xl md:text-4xl text-secondary text-center font-body'>T R A N S A C T I O N S</p>    
            
        </div>
        <div className='flex mt-24 justify-center text-white'>
        <table className="table-fixed text-center  border border-black">
            <thead>
                <tr className='border border border-white'>
                <th className='w-6 md:w-12 border border-white'>#</th>
                <th className='w-24 md:w-24 border border-white'>Sell Amount</th>
                <th className='w-24 md:w-24 border border-white'>Buy Amount</th>
                <th className='w-24 md:w-36 border border-white'>Sale Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    purchaseInfo &&
                    purchaseInfo.map((el: PurchaseState, idx: number) => (
                        <tr>
                            <td className='border border-white'>{idx + 1}</td>
                            <td className='border border-white'>{el.Amount}</td>
                            <td className='border border-white'>{el.tokenAmount}</td>
                            <td className='border border-white'>{el.createDate}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>


    </div>
    );
};

export default DashTransaction;
