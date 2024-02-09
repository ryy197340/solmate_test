import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { AiOutlineUser, AiOutlineDollarCircle } from 'react-icons/ai';
import { CgLoadbarDoc } from 'react-icons/cg';
import { VscSettings, VscGraphLine } from 'react-icons/vsc';
import { DiNetbeans } from 'react-icons/di';
import './index.css';

const NavBar: FC = () => {
    const [idx, setIdx] = useState(0);
    const { id } = useParams();
    useEffect(() => {
        if (id == 'transaction') setIdx(6);
        else setIdx(0);
    }, [id]);

    return (
        <>
            <div className="w-1/6 xl:w-1/5 flex items-center flex-col ">
                <div className="flex items-center flex-col bg-origin w-full">
                    <img
                        src="/assets/img/SolMate_Logo.png"
                        alt="Logo"
                        className="m-8 w-1/2 xl:w-32"
                    />

                    <div className="flex flex-col text-lg font-medium text-center xl:text-left ">
                        <Link to={'/dashboard'} onClick={() => setIdx(0)}>
                            {idx == 0 ? (
                                <div className="p-1 relative">
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center p-1 px-5">
                                        <span className="text-white">
                                            <MdOutlineSpaceDashboard
                                                className="inline m-1"
                                                size="24"
                                            />
                                            <span className="hidden xl:inline-block">
                                                _Dashboard
                                            </span>
                                        </span>
                                    </div>
                                    <img
                                        src="/assets/img/Navbar_bg.png"
                                        className="w-14 h-10 xl:w-48"
                                    />
                                </div>
                            ) : (
                                <div className="p-1 px-5">
                                    <MdOutlineSpaceDashboard
                                        className="inline m-1"
                                        size="24"
                                    />
                                    <span className="hidden xl:inline-block">
                                        _Dashboard
                                    </span>
                                </div>
                            )}
                        </Link>
                        <Link to={'/trade'} onClick={() => setIdx(1)}>
                            {idx == 1 ? (
                                <div className="p-1 relative">
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center p-1 px-5">
                                        <span className="text-white">
                                            <VscGraphLine
                                                className="inline m-1"
                                                size="24"
                                            />
                                            <span className="hidden xl:inline-block">
                                                _Trade
                                            </span>
                                        </span>
                                    </div>
                                    <img
                                        src="/assets/img/Navbar_bg.png"
                                        className="w-14 h-10 xl:w-48"
                                    />
                                </div>
                            ) : (
                                <div className="p-1 px-5">
                                    <VscGraphLine
                                        className="inline m-1"
                                        size="24"
                                    />
                                    <span className="hidden xl:inline-block">
                                        _Trade
                                    </span>
                                </div>
                            )}
                        </Link>
                        <Link to={'/deposits'} onClick={() => setIdx(2)}>
                            {idx == 2 ? (
                                <div className="p-1 relative">
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center p-1 px-5">
                                        <span className="text-white">
                                            <AiOutlineDollarCircle
                                                className="inline m-1"
                                                size="24"
                                            />
                                            <span className="hidden xl:inline-block">
                                                _Deposits
                                            </span>
                                        </span>
                                    </div>
                                    <img
                                        src="/assets/img/Navbar_bg.png"
                                        className="w-14 h-10 xl:w-48"
                                    />
                                </div>
                            ) : (
                                <div className="p-1 px-5">
                                    <AiOutlineDollarCircle
                                        className="inline m-1"
                                        size="24"
                                    />
                                    <span className="hidden xl:inline-block">
                                        _Deposits
                                    </span>
                                </div>
                            )}
                        </Link>
                        <Link to={'/protocols'} onClick={() => setIdx(3)}>
                            {idx == 3 ? (
                                <div className="p-1 relative">
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center p-1 px-5">
                                        <span className="text-white">
                                            <DiNetbeans
                                                className="inline m-1"
                                                size="24"
                                            />
                                            <span className="hidden xl:inline-block">
                                                _Protocols
                                            </span>
                                        </span>
                                    </div>
                                    <img
                                        src="/assets/img/Navbar_bg.png"
                                        className="w-14 h-10 xl:w-48"
                                    />
                                </div>
                            ) : (
                                <div className="p-1 px-5">
                                    <DiNetbeans
                                        className="inline m-1"
                                        size="24"
                                    />
                                    <span className="hidden xl:inline-block">
                                        _Protocols
                                    </span>
                                </div>
                            )}
                        </Link>
                        <Link to={'/settings'} onClick={() => setIdx(4)}>
                            {idx == 4 ? (
                                <div className="p-1 relative">
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center p-1 px-5">
                                        <span className="text-white">
                                            <VscSettings
                                                className="inline m-1"
                                                size="24"
                                            />
                                            <span className="hidden xl:inline-block">
                                                _Settings
                                            </span>
                                        </span>
                                    </div>
                                    <img
                                        src="/assets/img/Navbar_bg.png"
                                        className="w-14 h-10 xl:w-48"
                                    />
                                </div>
                            ) : (
                                <div className="p-1 px-5">
                                    <VscSettings
                                        className="inline m-1"
                                        size="24"
                                    />
                                    <span className="hidden xl:inline-block">
                                        _Settings
                                    </span>
                                </div>
                            )}
                        </Link>
                        <Link to={'/profile'} onClick={() => setIdx(5)}>
                            {idx == 5 ? (
                                <div className="p-1 relative">
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center p-1 px-5">
                                        <span className="text-white">
                                            <AiOutlineUser
                                                className="inline m-1"
                                                size="24"
                                            />
                                            <span className="hidden xl:inline-block">
                                                _Profile
                                            </span>
                                        </span>
                                    </div>
                                    <img
                                        src="/assets/img/Navbar_bg.png"
                                        className="w-14 h-10 xl:w-48"
                                    />
                                </div>
                            ) : (
                                <div className="p-1 px-5">
                                    <AiOutlineUser
                                        className="inline m-1"
                                        size="24"
                                    />
                                    <span className="hidden xl:inline-block">
                                        _Profile
                                    </span>
                                </div>
                            )}
                        </Link>
                        <Link
                            to={'/dashboard/transaction'}
                            onClick={() => setIdx(6)}
                        >
                            {idx == 6 ? (
                                <div className="p-1 relative">
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center p-1 px-5">
                                        <span className="text-white">
                                            <CgLoadbarDoc
                                                className="inline m-1"
                                                size="24"
                                            />
                                            <span className="hidden xl:inline-block">
                                                _Transactions
                                            </span>
                                        </span>
                                    </div>
                                    <img
                                        src="/assets/img/Navbar_bg.png"
                                        className="w-14 h-10 xl:w-48"
                                    />
                                </div>
                            ) : (
                                <div className="p-1 px-5">
                                    <CgLoadbarDoc
                                        className="inline m-1"
                                        size="24"
                                    />
                                    <span className="hidden xl:inline-block">
                                        _Transactions
                                    </span>
                                </div>
                            )}
                        </Link>
                    </div>
                </div>

                <div className="transition delay-150 bg-gradient-to-b from-origin to-transparent grow w-full"></div>
            </div>
        </>
    );
};

export default NavBar;
