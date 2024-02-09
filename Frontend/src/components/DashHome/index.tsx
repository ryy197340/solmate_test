import { FC, useEffect, useState } from 'react';
import TokenBalance from '../TokenBalance';
import DemoStage1 from '../DemoStage1';
import AccountStatus from '../AccountStatus';
import TableInfo from '../TableInfo';
import TokenSaleProgress from '../TokenSaleProgress';
import Statistics from '../Statistics';
import  NavBar  from '../NavBar/';
import Chart from '../Chart';
import Tokens from '../Tokens';
import "./index.css";

const DashHome: FC = () => {


    return (
                        <div className=' mt-12 md:mx-8'>   
                            <div className='flex flex-col xl:flex-row'>
                                <div className='xl:w-1/3 m-4 bg-strongBlue'>
                                    <TokenBalance />
                                    
                                </div>
                                <div className='xl:w-1/3 m-4 bg-gradient-to-r from-white to-sky-400'>
                                    <DemoStage1 />
                                </div>
                                <div className='xl:w-1/3 m-4 bg-gradient-to-r from-white to-sky-400'>
                                    <AccountStatus />
                                </div>
                            </div>
                            <div className='flex flex-col xl:flex-row'>
                                <div className='xl:w-3/5 m-4 bg-gradient-to-r from-white to-sky-400 items-center justify-center flex'>
                                    <TableInfo />
                                    
                                </div> 
                                <div className='xl:w-2/5 m-4 bg-gradient-to-r from-white to-sky-400 items-center justify-center flex'>
                                    <TokenSaleProgress />
                                </div>
                            </div>

                            <div className='p-4'>
                                <Statistics />
                            </div>
                            <div className='px-4 pt-4'>
                                <p className='text-xl text-white'>COMING SOON</p>
                            </div>

                            <div className='flex flex-col xl:flex-row'>
                                <div className=' xl:w-1/2 m-4 bg-gradient-to-r from-white to-sky-400 items-center justify-center flex'>
                                    <Tokens />
                                    
                                </div> 
                                <div className=' xl:w-1/2 m-4 bg-gradient-to-r from-white to-sky-400 '>
                                    <Chart />
                                </div>
                            </div>
                        </div>
    );
};

export default DashHome;
