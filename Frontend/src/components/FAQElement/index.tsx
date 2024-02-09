import { FC, useState, useRef, useEffect, useLayoutEffect } from 'react';
import './index.css';
import {AiOutlineArrowLeft, AiOutlineArrowDown} from 'react-icons/ai';

let initHeight = 0;
interface FAQElementInterface {
    question: string
    answer: string
}


export const FAQElement = ({
    question,
    answer
}:FAQElementInterface) => {

    const [mode, setMode] = useState(false);
    const answerElement = useRef<any>();
    useEffect(()=>{
        if(initHeight == 0){
            initHeight = answerElement.current.clientHeight;
            console.log("test",initHeight);
        }
            
        if(!mode){
            answerElement.current.style.paddingBottom = '0px';
            answerElement.current.style.opacity = '0';
            answerElement.current.style.height = '0';
            // answerElement.current.style.display= 'none';
        }
        else{
            answerElement.current.style.paddingBottom = '16px';
            answerElement.current.style.opacity = '100';
            answerElement.current.style.height = initHeight + 'px';
            // answerElement.current.style.display= '';
        }
        
    },[mode])
    return(
            <div className='text-lg mb-4'>
                {
                    !mode?
                        <p className='hover:cursor-pointer hover:text-secondary' onClick={()=>setMode(!mode)} ><AiOutlineArrowLeft className='inline' /> {question}</p>
                    :
                        <p className='hover:cursor-pointer hover:text-secondary' onClick={()=>setMode(!mode)} ><AiOutlineArrowDown className='inline' /> {question}</p>
                }
                
                <p ref={answerElement} className={`transition-all  ease-in-out duration-300 ml-6 `}>{answer}</p>

            </div>
    )
}