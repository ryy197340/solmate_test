import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { FC, useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import CustomParticles from '../components/CustomParticles';

const Stake: FC = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, [])

    return (
        <div className='relative min-h-screen flex flex-col break-words'>
<CustomParticles />
            <Header />

            <div className='max-w-[600px] mx-auto my-8 flex-1'>

                <h1 className='text-4xl text-primary mb-8 text-center font-body'>
                    Stake Solana
                </h1>

                <div className='flex flex-col gap-4 mb-12'>
                    <div className='grid grid-cols-2 gap-8 justify-items-center'>
                        <h2 className='text-2xl text-primary'>
                            Available
                        </h2>
                        <p className='text-2xl text-primary'>
                            0 Solana
                        </p>
                        <h2 className='text-2xl text-primary'>
                            Staked
                        </h2>
                        <p className='text-2xl text-primary'>
                            11 Solana
                        </p>
                        <h2 className='text-2xl text-primary'>
                            Unbonding
                        </h2>
                        <p className='text-2xl text-primary'>
                            0 Solana
                        </p>
                        <h2 className='text-2xl text-primary'>
                            Reward
                        </h2>
                        <p className='text-2xl text-primary'>
                            0.1 Solana
                        </p>
                    </div>
                </div>

                <div className='my-4'>
                    <WalletMultiButton />
                </div>

                <div className='flex md:flex-row flex-col items-center gap-4 justify-center'>
                    <button type='button' className='w-32 bg-secondary rounded-[24px] py-2 text-xl hover:font-bold'>
                        Stake
                    </button>
                    <button type='button' className='w-32 text-secondary border border-secondary rounded-[24px] py-2 text-xl hover:font-bold'>
                        Unstake
                    </button>
                    <button type='button' className='w-32 text-secondary border border-secondary rounded-[24px] py-2 text-xl hover:font-bold'>
                        Claim
                    </button>
                </div>

            </div>

            <Footer />

            <div className='footer-overlay absolute top-0 w-full min-h-screen h-full'></div>

        </div>

    );
};

export default Stake;
