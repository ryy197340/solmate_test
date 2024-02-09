import { FC, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
export const Header: FC = () => {
    const sideNav = useRef<any>();
    const wallet = useWallet();
    const onShow = () => {
        sideNav.current.style.width = '250px';
    };
    const onHide = () => {
        sideNav.current.style.width = '0px';
    };
    return (
        <div className="relative z-10">
            <div className="text-xl text-pressed font-mono flex justify-between items-center md:gap-8 gap-4 md:px-8 px-4 md:py-8 py-4 ">
                <NavLink to={'/'}>
                    <img
                        src="/assets/logo.svg"
                        alt="Solmate"
                        className="md:w-36 w-20 hover:saturate-200"
                    />
                </NavLink>

                <div className="lg:flex hidden gap-8 ">
                    <NavLink to={'/'} end>
                        {({ isActive }) => (
                            <p
                                className={`text-primary transition-all duration-300 hover:text-white ${
                                    isActive ? 'font-bold' : ''
                                }`}
                            >
                                _About
                            </p>
                        )}
                    </NavLink>
                    <NavLink to={'/opportunity'}>
                        {({ isActive }) => (
                            <p
                                className={`text-primary mt-8 transition-all duration-300 hover:text-white ${
                                    isActive ? 'font-bold' : ''
                                }`}
                            >
                                _Opportunity
                            </p>
                        )}
                    </NavLink>
                    <NavLink to={'/tokenomics'}>
                        {({ isActive }) => (
                            <p
                                className={`text-primary transition-all duration-300 hover:text-white ${
                                    isActive ? 'font-bold' : ''
                                }`}
                            >
                                _Tokenomics
                            </p>
                        )}
                    </NavLink>
                    <NavLink to={'/whitepaper'}>
                        {({ isActive }) => (
                            <p
                                className={`text-primary transition-all duration-300 mt-8 hover:text-white ${
                                    isActive ? 'font-bold' : ''
                                }`}
                            >
                                _Whitepaper
                            </p>
                        )}
                    </NavLink>
                </div>
                <div className="grow display xl:hidden "></div>
                <div className="flex flex-col md:ml-16 wrap ">
                    <a href="#" target="_blink">
                        <p className="p-1 text-center text-primary font-medium text-sm hover:text-white transition-all duration-300 md:text-base xl:text-lg">
                            Smart Contract
                        </p>
                    </a>
                    <div>
                        <div className="p-1 text-sm md:text-base xl:text-lg">
                            <WalletMultiButton />
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    className="cursor-pointer hover:opacity-80 hover:saturate-200"
                    onClick={onShow}
                >
                    <img
                        src="/assets/icon_menu.svg"
                        alt="menu"
                        className="md:h-16 h-12"
                    />
                </button>
            </div>

            <div
                id="mySidenav"
                className="text-md md:text-xl border-l border-primary sidenav text-primary"
                ref={sideNav}
            >
                <a
                    href="javascript:void(0)"
                    className="closebtn"
                    onClick={onHide}
                >
                    &times;
                </a>
                <NavLink to={'/dashboard'} onClick={onHide}>
                    _Dashboard
                </NavLink>
                <NavLink to={'/technology'} onClick={onHide}>
                    _Technology
                </NavLink>
                <NavLink to={'/stake'} onClick={onHide}>
                    _Staking
                </NavLink>
                <NavLink to={'/security'} onClick={onHide}>
                    _Security
                </NavLink>
                <NavLink to={'/wallet'} onClick={onHide}>
                    _Wallet
                </NavLink>
                <NavLink to={'/roadmap'} onClick={onHide}>
                    _Roadmap
                </NavLink>
                <NavLink to={'/support'} onClick={onHide}>
                    _Support
                </NavLink>
                <NavLink to={'/settings'} onClick={onHide}>
                    _Settings
                </NavLink>
                <div style={{ padding: '8px 8px 8px 32px' }}>
                    <WalletMultiButton />
                </div>
            </div>
        </div>
    );
};
