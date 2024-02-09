import { FC, useEffect, useState } from 'react';
import BorderButton from '../BorderButton';
import { usePurchaseInfo } from '../../hooks/usePurchaseInfo';
import { PurchaseState } from "../../constants/types";
import "./index.css";

const TableInfo: FC = () => {

    const purchaseInfo = usePurchaseInfo(true);

    return (
        <div className='text-sm p-4 flex flex-col lg:flex-row '>
            <table className="table-fixed text-center  border border-black">
                <thead>
                    <tr className='border border border-black'>
                    <th className='w-6 md:w-12 border border-black'>#</th>
                    <th className='w-24 md:w-24 border border-black'>Sell Amount</th>
                    <th className='w-24 md:w-24 border border-black'>Buy Amount</th>
                    <th className='w-24 md:w-36 border border-black'>Sale Date</th>
                    </tr>
                </thead>
                <tbody>
                {
                    purchaseInfo &&
                    purchaseInfo.map((el: PurchaseState, idx: number) => {
                        if(idx < 5)
                        return(
                            <tr>
                                <td className='border border-white'>{idx + 1}</td>
                                <td className='border border-white'>{el.Amount}</td>
                                <td className='border border-white'>{el.tokenAmount}</td>
                                <td className='border border-white'>{el.createDate}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

            <div className='mt-8 lg:mt-0 text-center flex items-center justify-center'>
                <div >
                    <p>Launch Date: ETA</p>
                    <p>Claimable Tokens: 120</p> 
                    <p>Reward Tokens: -</p> 
                    <div className='flex'>
                            <BorderButton mode={1} text='Email Verified'/>
                            <BorderButton mode={0} text='Submit KYC'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableInfo;
