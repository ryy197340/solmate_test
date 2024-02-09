import { FC, useState } from 'react';
import './index.css';

import {AiOutlineArrowLeft, AiOutlineArrowDown} from 'react-icons/ai';



export const SearchBox = () => {

    return(
        <div className='relative inline-block '>
            <img src='/assets/img/Search1.png' className='h-10'/>
            <div className='absolute left-0 top-0 w-full h-full'>
                <div className='relative w-full h-full px-4 p-2'>
                <input className='text-black border-none,  focus:outline-none' placeholder='Search answer here...'/>
                    <img src='/assets/img/Search2.png' className='absolute right-0 top-0 h-full' />
                </div>
            </div>
        </div>
    )
}