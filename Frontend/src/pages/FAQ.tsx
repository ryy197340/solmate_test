import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { TopNavigator } from '../components/TopNavigator';
import {FAQElement} from '../components/FAQElement';
import {SearchBox} from '../components/SearchBox';
import CustomParticles from '../components/CustomParticles';

const FAQData = [
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Egestas semper nisl sed rhoncus et morbi nisi. A curabitur eros, donec faucibus nunc ipsum id. Sagittis lorem semper blandit faucibus arcu, mi, lacus.'
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Egestas semper nisl sed rhoncus et morbi nisi. A curabitur eros, donec faucibus nunc ipsum id. Sagittis lorem semper blandit faucibus arcu, mi, lacus.'
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Egestas semper nisl sed rhoncus et morbi nisi. A curabitur eros, donec faucibus nunc ipsum id. Sagittis lorem semper blandit faucibus arcu, mi, lacus.'
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Egestas semper nisl sed rhoncus et morbi nisi. A curabitur eros, donec faucibus nunc ipsum id. Sagittis lorem semper blandit faucibus arcu, mi, lacus.'
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Egestas semper nisl sed rhoncus et morbi nisi. A curabitur eros, donec faucibus nunc ipsum id. Sagittis lorem semper blandit faucibus arcu, mi, lacus.'
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Egestas semper nisl sed rhoncus et morbi nisi. A curabitur eros, donec faucibus nunc ipsum id. Sagittis lorem semper blandit faucibus arcu, mi, lacus.'
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Egestas semper nisl sed rhoncus et morbi nisi. A curabitur eros, donec faucibus nunc ipsum id. Sagittis lorem semper blandit faucibus arcu, mi, lacus.'
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Egestas semper nisl sed rhoncus et morbi nisi. A curabitur eros, donec faucibus nunc ipsum id. Sagittis lorem semper blandit faucibus arcu, mi, lacus.'
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Egestas semper nisl sed rhoncus et morbi nisi. A curabitur eros, donec faucibus nunc ipsum id. Sagittis lorem semper blandit faucibus arcu, mi, lacus.'
    }
]
const FAQ: FC = () => {
    const [mode, setMode] = useState(0);
    return (
        <div className="faq relative flex flex-col home " >
            <CustomParticles />
            <div className='flex flex-col min-h-screen'>
                <div>
                    <Header />
                </div>
                <div className='grow text-primary p-4 px-4 lg:px-16'>

                    <div className='mt-12'>
                        <p className='text-4xl text-secondary text-center font-body'>F A Q</p>
                        <p className='text-2xl text-primary text-center'>Need some answer?</p>
                        <div className='flex justify-center items-center mt-4'>
                            <SearchBox />
                        </div>
                        
                    </div>
                    <div className='flex mt-24'>
                        <div className='text-left border-b border-primary text-xl'><p >Frequently Asked Questions</p></div>
                        <div className='grow text-right text-xl'>
                            <span onClick={()=>setMode(0)} className={`hover:cursor-pointer mr-4 ${mode == 0 ? 'opacity-100' : 'opacity-50'}`}>Expand All </span>
                            <span onClick={()=>setMode(1)} className={`hover:cursor-pointer mr-4 ${mode == 1 ? 'opacity-100' : 'opacity-50'}`}> Collapse All</span>
                        </div>
                    </div>

                    <div className='mt-8'>
                        {
                            FAQData.map((item, index)=>(
                                <FAQElement key={index} question={item.question} answer={item.answer}/>
                            ))
                        }
                        
                    </div>
                </div>
                <div className='mt-32'>
                    <Footer />
                </div>

                
            </div>
        </div >

    );
};

export default FAQ;
