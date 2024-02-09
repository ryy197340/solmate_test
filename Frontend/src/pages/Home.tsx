import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { TopNavigator } from '../components/TopNavigator';
import CustomParticles from '../components/CustomParticles';
import Button from '../components/Button';
const Home: FC = () => {
    const contractAddress = '0x87577E9004052dD82aC00c243651eba4d646c7B6';
    const activeRoadmap = 0;
    const roadmaps = [
        [
            'Token Fair Launch',
            '1000+ Holders',
            '1000+ Telegram Members',
            'White Paper Release',
            'Coingecko Listing',
            'Coinmarketcap Listing',
            'Contract Audit',
        ],
        [
            '5000 Holders',
            'Marketing',
            'Campaign 5000+ Telegram Members',
            'Merchant Website Integration',
        ],
        [
            '50 000 Holders',
            'Listing on small exchanges',
            'New Partnership',
            'Gear up for major exchange listing',
        ],
        [
            'TV and Radio Interviews',
            'SolNet',
            'Sol Mask',
            'Merchant Website Integration',
        ],
    ];

    const copyBgSrc = '/assets/btn_copycontract.svg';
    const copyBgHoverSrc = '/assets/btn_copycontract_hover.svg';
    const [copyBackground, setCopyBackground] = useState(copyBgSrc);
    const handleCopyHover = () => {
        setCopyBackground(copyBgHoverSrc);
    };
    const handleCopyLeave = () => {
        setCopyBackground(copyBgSrc);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, []);

    return (
        <div className="relative min-h-screen flex flex-col home">
            <CustomParticles />
            <Header />

            <div className="section px-8">
                <div className="container mx-auto my-12">
                    <div className="flex flex-col gap-8 text-center items-center">
                        <h1 className="md:text-6xl text-3xl text-secondary tracking-[.4em] font-body">
                            SOLMATE
                        </h1>
                        <p className="md:text-4xl text-2xl text-primary">
                            Community run and supported project <br />
                            Runs on Solana Network <br />
                            Fast, Secure, low cost transaction fees <br />
                            DeFi and community driven
                        </p>
                        <div className="flex">
                            <Button
                                bgSrc="/assets/btn_getstarted.svg"
                                bgHoverSrc="/assets/btn_getstarted_hover.svg"
                                href="/presale"
                                alt="Get Started"
                            />
                            <Link to={'/dashboard'} className="-ml-6">
                                <img
                                    src="assets/launch_presale.svg"
                                    alt="Launch Presale"
                                    className="h-[3.12rem] hover:opacity-50"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section px-8 tracking-[.2em]">
                <div className="container mx-auto my-12">
                    <div className="md:grid flex flex-col grid-cols-2 justify-items-center gap-16">
                        <div className="relative flex flex-col gap-4 lg:w-96 md:w-84 sm:w-72 w-full md:self-start xs:self-end self-start">
                            <img
                                src="/assets/img_solnet.svg"
                                alt="Solnet"
                                className="lg:h-48 sm:h-32 xs:h-24 h-16 sm:static absolute top-[-3rem] right-2"
                            />
                            <h2 className="text-2xl text-secondary tracking-[.4em]">
                                SOLNET
                            </h2>
                            <p className="text-xl text-lsecondary">
                                Our own NFT solution that will enable content
                                creators, artist, game developers musicians and
                                many other businesses to utilize the ever grown
                                NFT space
                            </p>
                        </div>
                        <div className="relative flex flex-col gap-4 lg:w-96 md:w-84 sm:w-72 w-full self-start">
                            <img
                                src="/assets/img_ecosystem.svg"
                                alt="Ecosystem"
                                className="lg:h-48 sm:h-32 xs:h-24 h-16 sm:static absolute top-[-3rem] right-2"
                            />
                            <h2 className="text-2xl text-secondary tracking-[.4em]">
                                ECOSYSTEM
                            </h2>
                            <p className="text-xl text-lsecondary">
                                A secure digital wallet that will enable SolMate
                                holders to hold their tokesn, NFT’s receive
                                their rewards, even trade tokens and coins from
                                to another, it also allow holders to purchase
                                good where crypto is accepted.
                            </p>
                        </div>
                        <div className="relative flex flex-col gap-4 lg:w-96 md:w-84 sm:w-72 w-full md:self-start xs:self-end self-start col-span-2">
                            <img
                                src="/assets/img_souldao.svg"
                                alt="SoulDao"
                                className="lg:h-48 sm:h-32 xs:h-24 h-16 sm:static absolute top-[-3rem] right-2"
                            />
                            <h2 className="text-2xl text-secondary tracking-[.4em]">
                                SOUL DAO
                            </h2>
                            <p className="text-xl text-lsecondary">
                                $Soul has been limited to 100 million tokens
                                that is our Governance token where our holders
                                and community will be able to vote on all
                                upcoming proposals and over direction of the
                                entire project.
                            </p>
                        </div>
                        <div className="relative flex flex-col gap-4 lg:w-96 md:w-84 sm:w-72 w-full self-start">
                            <img
                                src="/assets/img_solplanet.svg"
                                alt="SolPlanet"
                                className="lg:h-48 sm:h-32 xs:h-24 h-16 sm:static absolute top-[-3rem] right-2"
                            />
                            <h2 className="text-2xl text-secondary tracking-[.4em]">
                                SOLPLANET
                            </h2>
                            <p className="text-xl text-lsecondary">
                                A supporting system that will help promote many
                                issues our communities and the planet as a whole
                                is facing today. <br />
                                Our community will help fight: <br />
                                &gt; World hunger and poverty <br />
                                &gt; Enhance children education <br />
                                &gt; Global warming <br />
                                SolMate is partnering with many nonprofit
                                organization in all continents.
                            </p>
                        </div>
                        <div className="relative flex flex-col gap-4 lg:w-96 md:w-84 sm:w-72 w-full md:self-start xs:self-end self-start">
                            <img
                                src="/assets/img_soldev.svg"
                                alt="SolDev"
                                className="lg:h-48 sm:h-32 xs:h-24 h-16 sm:static absolute top-[-3rem] right-2"
                            />
                            <h2 className="text-2xl text-secondary tracking-[.4em]">
                                SOLDEV
                            </h2>
                            <p className="text-xl text-lsecondary">
                                Our very platform who will support independent
                                developers, companies that will enable
                                designers, artist, game makers, market places to
                                develop their own projects and prove a steady
                                income stream.
                            </p>
                        </div>
                        <div className="relative flex flex-col gap-4 lg:w-96 md:w-84 sm:w-72 w-full self-start col-span-2">
                            <img
                                src="/assets/img_solnft.svg"
                                alt="Solmate NFT"
                                className="lg:h-48 sm:h-32 xs:h-24 h-16 sm:static absolute top-[-3rem] right-2"
                            />
                            <h2 className="text-2xl text-secondary tracking-[.4em]">
                                SOLMATE NFT
                            </h2>
                            <p className="text-xl text-lsecondary">
                                Our very own NFT created by our developers which
                                will in limited quantity available as a
                                collectors item.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section px-8 lg:px-48">
                <div className="container mx-auto my-12 text-left">
                    <h1 className="md:text-4xl text-2xl text-secondary tracking-[.4em] mb-4">
                        ABOUT SOLMATE
                    </h1>
                    <p className="text-xl text-lsecondary tracking-[.2em] w-4/5">
                        With so many flyby Meme tokens that has been created,
                        and some have disappointed their communities which have
                        give the crypto world a bad reputation. Our founding
                        team decided to have a token that powers the community
                        and its holders and help them grow their investments, as
                        well as helping communities and causes through out the
                        world.
                    </p>
                </div>
            </div>

            <div className="section px-8 lg:px-48">
                <div className="container mx-auto my-12 text-right flex flex-col items-end">
                    <h1 className="md:text-4xl text-2xl text-secondary tracking-[.4em] mb-4">
                        OPPORTUNITY IN CRYPTO WORLD
                    </h1>
                    <p className="text-xl text-lsecondary tracking-[.2em] w-4/5">
                        Crypto is here to stay not only the young generations
                        are embracing it, but all ages and walks of like have
                        become are of the crypto and its future with many have
                        invested or planning to invest already. Even the big
                        financial institutions such as JPMorgan Chase, Morgan
                        Stanley and Goldman Sachs who just a few years ago
                        discredited crypto and it potential are now embracing it
                        and rpoving greater wealth and diversified portfolios to
                        their clients. With that being said crypto is here to
                        stay and will change the way how we will buy, sell,
                        invest in the future.
                    </p>
                </div>
            </div>

            <div className="section px-8 tracking-[.2em]">
                <div className="container mx-auto my-12">
                    <h1 className="md:text-4xl text-2xl text-secondary tracking-[.4em] mb-4">
                        TOKENOMICS
                    </h1>
                    <p className="text-xl text-lsecondary">
                        $SolMate and $Soul are build on Solana Network one of
                        the fastest, secured with lowest fees.
                        <br />
                        <br />
                        1% tax on all transactions distributed to:
                    </p>
                    <div className="md:w-[600px] w-full mx-auto">
                        <p className="text-xl text-lsecondary leading-[3rem] px-4">
                            _40% to holders
                            <br />
                            _20% Developers funds
                            <br />
                            _10% Marketing
                            <br />
                            _10% Charity
                            <br />
                            _10% Airdrop/Investors
                            <br />
                            _10% Buyback/burn
                            <br />
                        </p>
                    </div>
                </div>
            </div>

            <div className="section px-8 lg:mb-24 md:mb-12 mb-6">
                <div className="container mx-auto md:my-12 my-6">
                    <h1 className="md:text-4xl text-2xl text-secondary tracking-[.4em] mb-4">
                        SMART CONTRACT
                    </h1>
                    <p className="text-xl text-lsecondary font-bold pb-8 break-all">
                        Solmate V2 New Contract:
                        <br />
                        {contractAddress}
                    </p>
                    <CopyToClipboard text={contractAddress}>
                        <img
                            src={copyBackground}
                            alt="Copy Contract"
                            className="h-14 hover:cursor-pointer"
                            onMouseEnter={handleCopyHover}
                            onMouseLeave={handleCopyLeave}
                        />
                    </CopyToClipboard>
                </div>
            </div>

            <div className="section px-8 lg:mb-24 md:mb-12 mb-6">
                <div className="container mx-auto md:my-12 my-6">
                    <h1 className="md:text-4xl text-2xl text-secondary tracking-[.4em] mb-4">
                        ROADMAP
                    </h1>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                        {roadmaps.map((roadmap, idx) => (
                            <div className="roadmap" key={idx}>
                                <div className="flex gap-2 mb-6">
                                    <div className="w-48 bg-primary text-black text-2xl text-center font-medium">
                                        STAGE {idx + 1}
                                    </div>
                                    {idx === activeRoadmap ? (
                                        <div className="bg-white px-2 py text-black font-bold text-2xl">
                                            LIVE
                                        </div>
                                    ) : null}
                                </div>
                                <div className="relative flex flex-col gap-4">
                                    {roadmap.map((item, idx2) => (
                                        <div
                                            className="flex gap-3 items-baseline"
                                            key={idx2}
                                        >
                                            <img
                                                src="/assets/icon_checkmark.svg"
                                                alt="Checkmark"
                                                className="h-5"
                                            />
                                            <span className="md:text-2xl text-xl text-lsecondary">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="section px-8 lg:mb-24 md:mb-12 mb-6">
                <div className="container mx-auto md:my-12 my-6">
                    <h1 className="md:text-4xl text-2xl text-secondary tracking-[.4em] mb-4">
                        SOL MASK ROADMAP
                    </h1>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="relative">
                            <div className="w-48 bg-primary text-black text-2xl text-center font-medium">
                                2022
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-1">
                                <div className="relative">
                                    <h4 className="text-white text-lg py-4">
                                        Q1 - Q2
                                    </h4>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="md:text-2xl text-xl text-lsecondary">
                                            Sol Mask V1 Release
                                        </h3>
                                        <h3 className="md:text-2xl text-xl text-lsecondary">
                                            Sol Rewards (‘Staking’) V1.1
                                        </h3>
                                        <h3 className="md:text-2xl text-xl text-lsecondary">
                                            Sol Dev
                                        </h3>
                                    </div>
                                </div>
                                <div className="relative">
                                    <h4 className="text-white text-lg py-4">
                                        Q3 - Q4
                                    </h4>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="md:text-2xl text-xl text-lsecondary">
                                            Sol Net
                                        </h3>
                                        <h3 className="md:text-2xl text-xl text-lsecondary">
                                            Sol Mask
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-48 bg-primary text-black text-2xl text-center font-medium">
                                2023
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-1">
                                <div className="relative">
                                    <h4 className="text-white text-lg py-4">
                                        Q1 - Q2
                                    </h4>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="md:text-2xl text-xl text-lsecondary">
                                            SolMate NFT
                                        </h3>
                                        <h3 className="md:text-2xl text-xl text-lsecondary">
                                            Sol Nexus
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TopNavigator />

            <Footer />

            <div className="footer-overlay absolute top-0 w-full min-h-screen h-full"></div>
        </div>
    );
};

export default Home;
