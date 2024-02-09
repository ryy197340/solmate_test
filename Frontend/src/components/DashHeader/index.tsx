import { FC, useRef } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { useWallet} from '@solana/wallet-adapter-react';
import {
    WalletMultiButton,
  } from "@solana/wallet-adapter-react-ui";
export const DashHeader: FC = () => {

    const sideNav = useRef<any>();
    const wallet = useWallet();

    const onShow = ()=>{
        sideNav.current.style.width = "250px";
    }
    const onHide = ()=>{
        sideNav.current.style.width = "0px";
    }
    return (
        <div className='relative z-10'>

            <div className='text-2xl text-pressed font-mono font-bold flex justify-between items-center md:gap-8 gap-4 md:px-8 px-4 md:py-8 py-4'>

                <div className='xl:flex hidden gap-8 '>
                    <Link to={'/'}>
                        <p className=''>
                            _About
                        </p>
                    </Link>
                    <Link to={'/'}>
                        <p className='mt-8'>
                            _Opportunity
                        </p>
                    </Link>
                    <Link to={'/'}>
                        <p className=''>
                            _Tokenomics
                        </p>
                    </Link>
                    <Link to={'/whitepaper'}>
                        <p className='mt-8'>
                            _Contract
                        </p>
                    </Link>
                    <Link to={'/'}>
                        <p className=''>
                            _Buy
                        </p>
                    </Link>
                    
                </div>
                <div className='grow display xl:hidden'></div>
                <div className='flex flex-col md:ml-16 wrap '>

                    <a href='#' target='_blink'>
                        <p className='p-1 text-center font-medium text-sm md:text-base xl:text-lg'>
                            Smart Contract
                        </p>
                    </a>
                    <div>
                    
                        <div className='p-1 text-sm md:text-base xl:text-lg'>
                            <WalletMultiButton />
                        </div>
                    </div>
                </div>
                <button type='button' className='cursor-pointer hover:opacity-80' onClick={onShow}>
                    <img src='/assets/icon_menu.svg' alt='menu' className='md:h-16 h-12' />
                </button>

            </div>
            <div id="mySidenav2" className="text-md md:text-xl border-l border-primary sidenav text-primary" ref={sideNav}>
                <a href="javascript:void(0)" className="closebtn" onClick={onHide}>&times;</a>
                <Link to={'/dashboard'} onClick={onHide}>
                    _Dashboard
                </Link>
                <Link to={'/technology'} onClick={onHide}>
                    _Technology
                </Link>
                <Link to={'/stake'} onClick={onHide}>
                    _Staking
                </Link>
                <Link to={'/security'} onClick={onHide}>
                    _Security
                </Link>
                <Link to={'/wallet'} onClick={onHide}>
                    _Wallet
                </Link>
                <Link to={'/roadmap'} onClick={onHide}>
                    _Roadmap
                </Link>
                <Link to={'/support'} onClick={onHide}>
                    _Support
                </Link>
                <Link to={'/settings'} onClick={onHide}>
                    _Settings
                </Link>
            </div>
        </div >
    );
}