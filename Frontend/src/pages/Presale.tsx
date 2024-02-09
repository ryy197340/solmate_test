import { FC, useEffect, useState } from 'react';
import ExchangeModal from '../components/ExchangeModal';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import CustomParticles from '../components/CustomParticles';

import { usePresaleInfo } from '../hooks/usePresaleInfo';

const Presale: FC = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const { price, currentSupply, totalSupply } = usePresaleInfo(modalOpen);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, []);

    const handleBuy = () => {
        setModalOpen(true);
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <>
            <div className='presale relative min-h-screen flex flex-col break-words'>
                <CustomParticles />
                <Header />

                <div className="container mx-auto my-12">
                    <div className="relative px-8">
                        <div className="flex flex-col gap-8 text-center items-center lg:mb-48 md:mb-36 mb-24">
                            <h1 className="text-4xl text-secondary tracking-[.4em] leading-12 mb-4 font-body">
                                GET IN EARLY ON <br />
                                THE <b>SOLMATE PRESALE</b>
                            </h1>

                            <p className="text-2xl text-primary max-w-[600px]">
                                Community run and supported project Runs on
                                Solana Network Fast, Secure, low cost
                                transaction fees DeFi and community driven
                            </p>

                            {
                                price ?
                                    <>

                                        <div className='text-primary text-xl'>

                                            <p className='text-left'>
                                                1 USDT = {price} SOUL
                                            </p>

                                            <p className='text-left mt-2'>
                                                Token Supply : {totalSupply?.toString()} SOUL
                                            </p>

                                            <p className='text-left mt-2'>
                                                Total Saled : {currentSupply?.toString()} SOUL
                                            </p>

                                            <div className='w-full border border-secondary bg-transparent mt-4'>
                                                <div className='bg-secondary h-8' style={{ width: `${(currentSupply ?? 0) / (totalSupply ?? 0) * 100}%` }}>
                                                </div>
                                            </div>

                                        </div>

                                        <button type='button'
                                            className='text-xl text-black font-semibold bg-secondary py-3 px-6 rounded-lg cursor-pointer hover:opacity-80'
                                            onClick={handleBuy}>
                                            Buy SolMate Token
                                        </button>

                                    </>
                                    : <div className='text-center text-xl text-primary'>
                                        Loading...
                                    </div>
                            }

                        </div>

                        <div className="flex flex-col gap-8 text-center items-center lg:mb-48 md:mb-36 mb-24">
                            <h1 className="text-4xl text-secondary tracking-[.4em] mb-4">
                                WHY SOLMATE?
                            </h1>
                            <div className="flex md:flex-row flex-col gap-8 text-left mb-8">
                                <div className="flex-1">
                                    <h2 className="text-secondary text-6xl tracking-[.4em] m-2">
                                        1
                                    </h2>
                                    <h3 className="text-secondary text-2xl tracking-[.4em]">
                                        SOUL
                                    </h3>
                                    <p className="text-lsecondary text-xl">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tempus vulputate eros,
                                        non accumsan venenatis varius. Quis
                                        fringilla euismod dui, tellus rhoncus,
                                        scelerisque.
                                    </p>
                                </div>

                                <div className='flex-1'>
                                    <h2 className='text-secondary text-6xl tracking-[.4em] m-2'>2</h2>
                                    <h3 className='text-secondary text-2xl tracking-[.4em]'>SOUL</h3>
                                    <p className='text-lsecondary text-xl'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus vulputate eros, non accumsan venenatis varius. Quis fringilla euismod dui, tellus rhoncus, scelerisque.
                                    </p>
                                </div>

                                <div className='flex-1'>
                                    <h2 className='text-secondary text-6xl tracking-[.4em] m-2'>3</h2>
                                    <h3 className='text-secondary text-2xl tracking-[.4em]'>SOUL</h3>
                                    <p className='text-lsecondary text-xl'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus vulputate eros, non accumsan venenatis varius. Quis fringilla euismod dui, tellus rhoncus, scelerisque.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 text-center items-center lg:mb-48 md:mb-36 mb-24">
                            <h1 className="text-4xl text-secondary tracking-[.4em] mb-4">
                                HOW TO BUY SOLMATE
                            </h1>
                            <div className="flex md:flex-row flex-col gap-8 text-left mb-8">
                                <div className="flex-1">
                                    <div className="w-36 bg-secondary text-black text-2xl text-center font-medium mb-4">
                                        STEP 1
                                    </div>
                                    <p className="text-lsecondary text-xl">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tempus vulputate eros,
                                        non accumsan venenatis varius. Quis
                                        fringilla euismod dui, tellus rhoncus,
                                        scelerisque.
                                    </p>
                                </div>

                                <div className="flex-1">
                                    <div className="w-36 bg-secondary text-black text-2xl text-center font-medium mb-4">
                                        STEP 2
                                    </div>
                                    <p className="text-lsecondary text-xl">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tempus vulputate eros,
                                        non accumsan venenatis varius. Quis
                                        fringilla euismod dui, tellus rhoncus,
                                        scelerisque.
                                    </p>
                                </div>

                                <div className="flex-1">
                                    <div className="w-36 bg-secondary text-black text-2xl text-center font-medium mb-4">
                                        STEP 3
                                    </div>
                                    <p className="text-lsecondary text-xl">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tempus vulputate eros,
                                        non accumsan venenatis varius. Quis
                                        fringilla euismod dui, tellus rhoncus,
                                        scelerisque.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

                <div className='footer-overlay absolute top-0 w-full min-h-screen h-full'></div>

                <ExchangeModal isModalOpen={modalOpen} toggleModal={toggleModal} />

            </div>
        </>
    );
};

export default Presale;
