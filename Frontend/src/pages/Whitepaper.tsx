import { FC, useEffect, useRef, useState } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { TopNavigator } from '../components/TopNavigator';
import CustomParticles from '../components/CustomParticles';

const Whitepaper: FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, []);

    const sideNav = useRef<any>();
    const main = useRef<any>();
    const [whitepaperMode, setWhitepaperMode] = useState(false);
    useEffect(() => {
        if (!whitepaperMode) {
            sideNav.current.style.width = '20px';
            main.current.style.marginLeft = '20px';
        } else {
            sideNav.current.style.width = '250px';
            main.current.style.marginLeft = '250px';
        }
    }, [whitepaperMode]);

    return (
        <div
            ref={main}
            className="transition-all ease-in-out delay-50 relative min-h-screen flex flex-col whitepaper break-words tracking-[.2em]"
        >
            <CustomParticles />
            <Header />

            <div className="container mx-auto mb-12">
                <div className="relative px-8">
                    <div className="flex flex-col gap-12 ">
                        <div className="relative" id="solmate">
                            <div className="absolute">
                                <img
                                    src="/assets/wp_solmate.svg"
                                    alt="Solmate Whitepaper"
                                    className="h-32"
                                />
                            </div>
                            <div className="md:ml-16 ml-4">
                                <h1 className="text-secondary lg:text-4xl md:text-3xl text-2xl tracking-[.4em] my-8 font-body">
                                    SOLMATE WHITEPAPER
                                </h1>
                                <p className="text-primary text-xl w-full md:w-4/5">
                                    As you may already know, the cryptocurrency
                                    sector has already transformed finance as we
                                    know it. For the first time, people can send
                                    and receive money in the form of tokens
                                    without having to deal with intermediaries
                                    like banks or governments.
                                    <br />
                                    <br />
                                    The exponential growth of decentralized
                                    finance, or DeFi, proves there are severe
                                    flaws with traditional finance, and crypto
                                    offers new and innovative opportunities for
                                    growth, investing, ROI, and additional use
                                    cases.
                                    <br />
                                    <br />
                                    The decentralization of blockchain
                                    technology has offered countless promises
                                    about disrupting industries and profitable
                                    and progressive use cases. For example, many
                                    believe the blockchain will change how human
                                    beings do business, allowing for a new level
                                    of transparency.
                                    <br />
                                    <br />
                                    There are other use cases to consider: the
                                    blockchain could change the concept of a
                                    “contract” thanks to smart contract
                                    technology, or medical records could be
                                    secure but decentralized - accessed when
                                    needed and protected by encryption.
                                    <br />
                                    <br />
                                    There have been some setbacks for all the
                                    incredibly promising potential of blockchain
                                    and crypto. Unfortunately, we also recognize
                                    that many crypto-related projects have
                                    proven to be frauds, exit scams, and rug
                                    pulls. There have been various situations
                                    where project founders have been able to
                                    steal millions from their investors. In many
                                    cases, these cybercriminals are even able to
                                    avoid law enforcement.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="relative" id="about">
                            <div className="absolute">
                                <img
                                    src="/assets/wp_about.svg"
                                    alt="About Solmate"
                                    className="h-32"
                                />
                            </div>
                            <div className="md:ml-16 ml-4">
                                <h1 className="text-secondary lg:text-4xl md:text-3xl text-2xl tracking-[.4em] my-8">
                                    ABOUT SOLMATE
                                </h1>
                                <p className="text-primary text-xl w-full md:w-4/5">
                                    The SolMate team is serious about building a
                                    team and community rooted in integrity,
                                    transparency, and communication. We hope
                                    that SolMate investors are not only able to
                                    make a profit but also able to make a
                                    visible and positive impact on the world.
                                    <br />
                                    <br />
                                    Unlike other “fly by night” meme tokens, we
                                    hope to build a sustainable Solana-based
                                    ecosystem. We know that many other crypto
                                    projects have focused on short-term profit,
                                    but we’re interested in executing a
                                    long-term vision for the SolMate project.
                                    SolMate was founded by a group of focused
                                    and committed individuals passionate about
                                    crypto and its ability to change the world.
                                    While many projects have been “overhyped”,
                                    we plan on being community-driven and
                                    transparent from the beginning.
                                    <br />
                                    <br />
                                    Solmate boasts four main features that we
                                    believe will help us succeed in both the
                                    short-term and long-term future:
                                    <br />
                                    <br />
                                    1. It’s a community-run and supported
                                    project. This is not a centralized project
                                    where leadership will take control and make
                                    the decisions for the community - we believe
                                    in a democratic and diverse community that
                                    will be governed by the SOUL DAO.
                                    <br />
                                    <br />
                                    2. The project will run on the Solana
                                    blockchain. We believe that the Solana
                                    blockchain remains one of the most crucial
                                    and undervalued blockchains in the world.
                                    <br />
                                    <br />
                                    3. The SolMate project will be fast, secure,
                                    and also offer low transaction fees. The
                                    goal here is to build a community over time,
                                    not profit off excessive fees and penalties.
                                    The community will be responsible for
                                    specific future decisions regarding fees,
                                    scalability, or security.
                                    <br />
                                    <br />
                                    4. The project is a DeFi project, meant to
                                    democratize finance and make it more
                                    accessible to the less fortunate worldwide.
                                    We pledge to remain transparent and
                                    accountable to the SolMate community. We
                                    also pledge to donate to causes that help
                                    the unfinanced gain access to financial
                                    services.
                                    <br />
                                    <br />
                                    We believe that SolMate truly has the power
                                    to improve the world, but we also recognize
                                    that it will take time, effort, and
                                    resources to launch a project of this scale.
                                    Here, we hope to outline our
                                    community-driven vision for SolMate, explain
                                    the project’s tokenomics, and more.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="relative" id="tokenomics">
                            <div className="absolute">
                                <img
                                    src="/assets/wp_tokenomics.svg"
                                    alt="Solmate Tokenomics"
                                    className="h-32"
                                />
                            </div>
                            <div className="md:ml-16 ml-4">
                                <h1 className="text-secondary lg:text-4xl md:text-3xl text-2xl tracking-[.4em] my-8">
                                    SOLMATE TOKENOMICS
                                </h1>
                                <p className="text-primary text-xl w-full md:w-4/5">
                                    We’re proud to launch the SolMate project on
                                    the Solana blockchain, a blockchain known
                                    for speed and scalability. It’s also
                                    important to note that the Solana blockchain
                                    is more environmentally friendly than other
                                    blockchains, which aligns with our overall
                                    vision to impact this planet positively.
                                    Solana’s network allows for a theoretical
                                    throughput of 65,000 transactions per
                                    second, a significant increase over Bitcoin
                                    and Ethereum.
                                    <br />
                                    <br />
                                    The SolMate ecosystem will feature two
                                    tokens: $SOLMATE, our native utility token,
                                    and $SOUL, an additional governance token
                                    that can also be used for SolMate
                                    transactions. The fixed supply for the
                                    $SOLMATE and $SOUL token is 100 million
                                    tokens.
                                    <br />
                                    <br />
                                    There will be a 1% tax in perpetuity
                                    regarding ALL $SOLMATE and $SOUL
                                    transactions. Here is how that 1% tax will
                                    be redistributed throughout the SolMate
                                    ecosystem:
                                    <br />
                                    <br />
                                    40% will be distributed among $SOLMATE token
                                    holders. Holders will not just receive
                                    additional $SOLMATE tokens from these
                                    transactions, but can also be rewarded with
                                    $SOUL Governance DAO tokens.
                                    <br />
                                    <br />
                                    In order to receive rewards for the $SOUL
                                    token, they must be held for 1% each month
                                    it is held or 12% for every year held.The
                                    $SOUL token must be held for at least 30
                                    days to be eligible for any rewards.
                                    <br />
                                    <br />
                                    20% will be distributed to SolMate
                                    developers. We believe in incentivizing and
                                    rewarding those who have directly
                                    contributed to the SolMate ecosystem. It not
                                    only helps improve the SolMate project but
                                    also enables SolMate to hire additional
                                    developer talent as needed.
                                    <br />
                                    <br />
                                    10% will be reserved for SolMate marketing
                                    campaigns and initiatives. The money will be
                                    spent solely to market SolMate-related
                                    products or services, and attract new
                                    investors and token holders.
                                    <br />
                                    <br />
                                    10% will be donated to charities that the
                                    SolMate community supports/agrees upon. Our
                                    goal is to donate to charities focusing on
                                    causes such as hunger, childhood education,
                                    and environmental protection.
                                    <br />
                                    <br />
                                    10% will be reserved for both 1)early
                                    investors and 2) community airdrops. Each
                                    airdrop must be approved through our DAO
                                    proposals, but these funds cannot be used to
                                    influence decisions regarding the SolMate
                                    ecosystem.
                                    <br />
                                    <br />
                                    10% will be either 1) bought back or
                                    2)burned, for additional liquidity.
                                    <br />
                                    <br />
                                    What will the process look like for “buying
                                    back” or burning $SOLMATE tokens? The 10%
                                    reserved for either buybacks or burns will
                                    be held in a BuyBack wallet that will act as
                                    a “safe deposit vault” wallet for these
                                    tokens. The tokens can either then be
                                    permanently burned or re-introduced to the
                                    Solmate ecosystem if necessary. The funds
                                    will be protected by a smart contract
                                    complete with a 48-hour timelock, and six
                                    wallet signatures are needed to access the
                                    funds. The funds will either be burned or
                                    reintroduced depending on SOUL DAO
                                    proposals.
                                    <br />
                                    <br />
                                    This token distribution model ensures
                                    maximum participation of SolMate token
                                    holders and incentivizes long-term growth
                                    for SolMate token investors. Also, this
                                    model helps incentivize all users of the
                                    SolMate ecosystem.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="relative" id="outlook">
                            <div className="absolute">
                                <img
                                    src="/assets/wp_outlook.svg"
                                    alt="A CRYPTO OUTLOOK"
                                    className="h-32"
                                />
                            </div>
                            <div className="md:ml-16 ml-4">
                                <h1 className="text-secondary lg:text-4xl md:text-3xl text-2xl tracking-[.4em] my-8">
                                    A CRYPTO OUTLOOK
                                </h1>
                                <p className="text-primary text-xl w-full md:w-4/5">
                                    The SolMate team also recognizes that there
                                    is a significant amount of volatility in the
                                    crypto sector, which is why we have
                                    structured both our tokenomics and roadmap
                                    to account for any future volatility that
                                    can affect growth and expansion. People are
                                    increasingly realizing that crypto is here
                                    to stay, offering a new way to buy and sell
                                    digital assets and create generational
                                    wealth.
                                    <br />
                                    <br />
                                    While there are many critics regarding
                                    recent crypto downturns, the truth is that
                                    crypto has already made quite the entrance.
                                    Since 2009, the cryptocurrency markets went
                                    from nonexistent to being worth several
                                    trillion dollars. In 2010, Bitcoin’s value
                                    ranged from less than a penny to about nine
                                    cents. As of this writing, the price of 1
                                    Bitcoin hovers around $20,000.
                                    <br />
                                    <br />
                                    Many well-known and powerful financial
                                    institutions that dismissed and downplayed
                                    cryptocurrency in the past are also
                                    embracing it. This includes institutions
                                    like JP Morgan Chase, Morgan Stanley, and
                                    Goldman Sachs. More people of all ages,
                                    especially millennials and Gen Z, are
                                    looking to invest and diversify their
                                    portfolios with cryptocurrency tokens.
                                    <br />
                                    <br />
                                    Many younger people worldwide already live a
                                    digital-focused lifestyle, where they
                                    interact with applications, create/consume
                                    content, and connect with their friends on
                                    their own terms. It’s only natural that
                                    crypto will become the logical way to send
                                    and receive money instantly. Many already
                                    view crypto as a way to empower themselves
                                    that is impossible through traditional
                                    finance.
                                    <br />
                                    <br />
                                    There is no way to completely “predict” the
                                    crypto market, but we believe there is a
                                    tremendous opportunity for growth for our
                                    SolMate investors. We also think Solmate’s
                                    growth opportunity is massive because the
                                    Solana blockchain can dominate more of the
                                    crypto and NFT ecosystem over the next
                                    several years.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="relative" id="ecosystem">
                            <div className="absolute">
                                <img
                                    src="/assets/wp_ecosystem.svg"
                                    alt="THE SOLMATE ECOSYSTEM"
                                    className="h-32"
                                />
                            </div>
                            <div className="md:ml-16 ml-4">
                                <h1 className="text-secondary lg:text-4xl md:text-3xl text-2xl tracking-[.4em] my-8">
                                    THE SOLMATE ECOSYSTEM
                                </h1>
                                <p className="text-primary text-xl w-full md:w-4/5">
                                    The ultimate goal is for the SolMate project
                                    to expand into an entire ecosystem rather
                                    than just one particular venture. This
                                    robust ecosystem will also allow for
                                    increased utility and value of the $SolMate
                                    and $SOUL tokens. As the ecosystem grows,
                                    the $SolMate token may offer new
                                    applications.
                                    <br />
                                    <br />
                                    Here are some of the various parts of the
                                    eventual SolMate ecosystem. We plan on
                                    regularly updating our community on the
                                    progress and launch of these following
                                    products and services.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="relative" id="solmask">
                            <div className="absolute">
                                <img
                                    src="/assets/wp_solmask.svg"
                                    alt="SOL MASK"
                                    className="h-32"
                                />
                            </div>
                            <div className="md:ml-16 ml-4">
                                <h1 className="text-secondary lg:text-4xl md:text-3xl text-2xl tracking-[.4em] my-8">
                                    SOL MASK
                                </h1>
                                <p className="text-primary text-xl w-full md:w-4/5">
                                    One way the cryptocurrency sector has
                                    expanded has been thanks to the expansion of
                                    digital wallets, which helps investors and
                                    collectors secure their crypto and digital
                                    assets. We will launch our own
                                    SolMate-focused wallet called Sol Mask, a
                                    digital wallet supporting Solana-based
                                    digital assets.
                                    <br />
                                    <br />
                                    We will work diligently to make the Sol Mask
                                    as integrated and interoperable as possible.
                                    Not only will Sol Mask wallet owners be able
                                    to transfer and receive $SOLMATE and #SOUL
                                    tokens, but they’ll be able to exchange
                                    SolMate NFTs, as well. Of course, Sol Mask
                                    owners can purchase products or services
                                    wherever $SOLMATE is accepted.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="relative" id="solnexus">
                            <div className="absolute">
                                <img
                                    src="/assets/wp_solnexus.svg"
                                    alt="SOL NEXUS"
                                    className="h-32"
                                />
                            </div>
                            <div className="md:ml-16 ml-4">
                                <h1 className="text-secondary lg:text-4xl md:text-3xl text-2xl tracking-[.4em] my-8">
                                    SOL NEXUS
                                </h1>
                                <p className="text-primary text-xl w-full md:w-4/5">
                                    Another crucial part of the SolMate
                                    ecosystem will be the SolNexus platform.
                                    SolNexus will be an NFT platform that allows
                                    creators to monetize their art and mint it
                                    on the Solana blockchain. Creators,
                                    designers, and artists will be able to
                                    assign royalty rates to their NFTs, as well.
                                    <br />
                                    <br />
                                    SolNexus will charge a 5% minting fee and
                                    divert the funds to SolMate developers who
                                    help build and maintain the SolMate
                                    ecosystem. We believe this will be a crucial
                                    part of our future growth since Solana has
                                    already emerged as a popular NFT blockchain
                                    that is environmentally friendly, scalable,
                                    and boasts lower fees.
                                    <br />
                                    <br />
                                    We also may offer SolNexus-related
                                    promotions to encourage mass $SOLMATE token
                                    adoption. These proposals will be voted on
                                    through the SOUL DAO.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="relative" id="soldao">
                            <div className="absolute">
                                <img
                                    src="/assets/wp_soldao.svg"
                                    alt="SOL DAO"
                                    className="h-32"
                                />
                            </div>
                            <div className="md:ml-16 ml-4">
                                <h1 className="text-secondary lg:text-4xl md:text-3xl text-2xl tracking-[.4em] my-8">
                                    SOL DAO
                                </h1>
                                <p className="text-primary text-xl w-full md:w-4/5">
                                    We also recognize the rise of decentralized
                                    autonomous organizations, or DAOs, as a way
                                    to govern organizations. The SOUL DAO will
                                    operate, as mentioned before, thanks to
                                    $SOUL tokens which can be held for rewards.
                                    You can think of a DAO as an organization
                                    that is owned by its collective members but
                                    does not have a centralized leadership
                                    structure.
                                    <br />
                                    <br />
                                    The beauty of DAOs is that they offer the
                                    ability for decentralized governance.
                                    Instead of a central authority making
                                    decisions that affect the SolMate ecosystem,
                                    the SolMate community can vote and decide on
                                    decisions that help shape the ecosystem as
                                    it evolves. Members who live in different
                                    parts of the world, through a DAO, can
                                    collaborate and commit funds to specific
                                    causes as necessary.
                                    <br />
                                    <br />
                                    The DAO will help encourage active
                                    participation in the SolMate community and
                                    help decentralize leadership and
                                    decision-making within the SolMate
                                    ecosystem. The SolMate team believes that
                                    DAOs will transform the way that we think
                                    about organizations.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="relative" id="solplanet">
                            <div className="absolute">
                                <img
                                    src="/assets/wp_solplanet.svg"
                                    alt="SOLPLANET"
                                    className="h-32"
                                />
                            </div>
                            <div className="md:ml-16 ml-4">
                                <h1 className="text-secondary lg:text-4xl md:text-3xl text-2xl tracking-[.4em] my-8">
                                    SOLPLANET
                                </h1>
                                <p className="text-primary text-xl w-full md:w-4/5">
                                    The SolMate team believes in using
                                    blockchain technology to help improve the
                                    world as we know it. We’ve built
                                    contributing to charities within our
                                    tokenomics model, ensuring that the SolMate
                                    project consistently makes donations to
                                    causes we believe in and organizations that
                                    improve people’s lives.
                                    <br />
                                    <br />
                                    Our SolPlanet initiative is dedicated to
                                    changing the world for the better and using
                                    the available SolMate resources to make a
                                    positive difference. We plan on donating
                                    $SOLMATE tokens to charities addressing
                                    these issues:
                                    <br />
                                    1. World hunger
                                    <br />
                                    2. Global inequality and poverty
                                    <br />
                                    3. Improving the education of children
                                    worldwide
                                    <br />
                                    4. Climate change and global warming
                                    <br />
                                    <br />
                                    We are passionate about the success of
                                    SolMate, but we also have principles we
                                    respect and want to follow. While we are
                                    focused on making sure that our investors
                                    are happy, we want to also make sure we are
                                    making a positive impact in as many
                                    different ways as possible. We plan on
                                    partnering with nonprofit organizations on
                                    every continent to address these issues
                                    worldwide, as well.
                                    <br />
                                    <br />
                                    Our causes will be centered around improving
                                    the lives of humans everywhere. Many crypto
                                    projects claim that they will change the
                                    world, only to become an exit scam later to
                                    make a few people profitable. We are
                                    confident that crypto can do better than
                                    empty promises.
                                    <br />
                                    <br />
                                    At SolMate, we believe we can do things
                                    differently by creating a group of diverse
                                    individuals with a shared vision: we can use
                                    crypto to help fund noble causes that help
                                    the less fortunate and also help make the
                                    world a better place.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="relative" id="soldev">
                            <div className="absolute">
                                <img
                                    src="/assets/wp_soldev.svg"
                                    alt="SOL DEV"
                                    className="h-32"
                                />
                            </div>
                            <div className="md:ml-16 ml-4">
                                <h1 className="text-secondary lg:text-4xl md:text-3xl text-2xl tracking-[.4em] my-8">
                                    SOL DEV
                                </h1>
                                <p className="text-primary text-xl w-full md:w-4/5">
                                    To increase the utility and value of the
                                    SolMate token, we understand that we need to
                                    build a robust community that helps enable
                                    creators and developers. We plan on
                                    launching our platform, SolDEV, to support
                                    creators, including artists, game designers,
                                    developers, and marketplaces, to develop
                                    their own projects.
                                    <br />
                                    <br />
                                    We believe that this platform will help
                                    enable new innovative use cases for SolMate,
                                    including the creation of decentralized
                                    apps, products, and services. The built apps
                                    and marketplaces can then continue
                                    contributing to the SolMate ecosystem, with
                                    SolDEV driving growth and innovation within
                                    the SolMate blockchain network. The Solana
                                    blockchain is already growing rapidly, and
                                    we believe SolDEV can contribute
                                    significantly to that growth.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="relative" id="solnft">
                            <div className="absolute">
                                <img
                                    src="/assets/wp_solnft.svg"
                                    alt="SOLMATE NFT"
                                    className="h-32"
                                />
                            </div>
                            <div className="md:ml-16 ml-4">
                                <h1 className="text-secondary lg:text-4xl md:text-3xl text-2xl tracking-[.4em] my-8">
                                    SOLMATE NFT
                                </h1>
                                <p className="text-primary text-xl w-full md:w-4/5">
                                    One of the most incredible recent
                                    technological trends in the crypto sector is
                                    the rise of non-fungible tokens, or NFTs. In
                                    2021 alone, NFT sales hit $25 billion, with
                                    many significant corporations deciding to
                                    end up embracing NFTs. NFTs may also play a
                                    critical role in the virtual worlds, with
                                    many financial experts believing that the
                                    metaverse might be worth trillions of
                                    dollars. Solana has been essential to that
                                    growth, already surpassing $2 trillion in
                                    all-time NFT sales.
                                    <br />
                                    <br />
                                    We will be launching our own SolMate NFT
                                    collection on the Solana blockchain. This
                                    will be an exclusive launch with very few
                                    NFTs available, and these NFTs will act as
                                    digital collectibles with additional use
                                    cases within the SolMate ecosystem. More
                                    details regarding the SolMate NFT launch
                                    will be forthcoming.
                                    <br />
                                    <br />
                                    The rise of NFTs has been an incredible
                                    entrepreneur for many players in the
                                    ecosystem: the artist who can finally
                                    monetize their audience, an investor who can
                                    make a significant return, and the NFT
                                    collector hoping to collect digital assets.
                                    Many artists have been able to create
                                    life-changing wealth thanks to the rise of
                                    non-fungible tokens.
                                    <br />
                                    <br />
                                    SolMate also understands the importance of
                                    partnering with the right creators and
                                    influencers in the NFT space. We plan on
                                    forging strategic relationships with
                                    prominent NFT artists, entrepreneurs, and
                                    platforms to spread the word about our NFT
                                    collection.
                                    <br />
                                    <br />
                                    Mark Cuban, the billionaire serial
                                    entrepreneur/investor and owner of the
                                    Dallas Mavericks, has gone on record
                                    regarding the immense potential of
                                    non-fungible tokens. In early 2021, he
                                    stated, “You can sell anything digital using
                                    NFT. Virtual Mavs gear, sneakers, art,
                                    pictures, videos, experiences, anything your
                                    imagination can come up with.”
                                    <br />
                                    <br />
                                    Major corporations like Disney, Nike, and
                                    Gucci have entered virtual worlds and used
                                    NFTs to create engaging experiences for
                                    their fans. We believe the rise of NFTs,
                                    while it may have its ups and downs, will
                                    continue as an overall trend.
                                    <br />
                                    <br />
                                    Depending on the first NFT collection, we
                                    may also launch other Solmate NFT
                                    collections in the future. Also, SolMate may
                                    create marketing partnerships with other
                                    established NFT collections to increase the
                                    exposure and visibility of the SolMate
                                    community.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="relative" id="audit">
                            <div className="absolute">
                                <img
                                    src="/assets/wp_audit.svg"
                                    alt="SOLMATE SMART CONTRACT AUDIT"
                                    className="h-32"
                                />
                            </div>
                            <div className="md:ml-16 ml-4">
                                <h1 className="text-secondary lg:text-4xl md:text-3xl text-2xl tracking-[.4em] my-8">
                                    SOLMATE SMART CONTRACT AUDIT
                                </h1>
                                <p className="text-primary text-xl w-full md:w-4/5">
                                    We have stated before that we want to prove
                                    our dedication and transparency to SolMate
                                    investors, and we are currently in the
                                    process of getting our smart contract
                                    audited and certified by Certik. Certik
                                    remains the leading security-focused Web3
                                    auditing platform in the world. A Certik
                                    audit can help the SolMate community
                                    identify code errors, detect
                                    vulnerabilities, and be confident in smart
                                    contracts within our ecosystem.
                                    <br />
                                    <br />
                                    We believe that a Certik smart contract
                                    audit can help increase both our legitimacy
                                    and credibility within the crypto community.
                                    The goal here is for new, existing, and
                                    potential investors to understand that we
                                    are here to deliver rather than deceive or
                                    defraud anyone.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="relative" id="summary">
                            <div className="absolute">
                                <img
                                    src="/assets/wp_summary.svg"
                                    alt="A SOLFUL SUMMARY"
                                    className="h-32"
                                />
                            </div>
                            <div className="md:ml-16 ml-4">
                                <h1 className="text-secondary lg:text-4xl md:text-3xl text-2xl tracking-[.4em] my-8">
                                    A SOLFUL SUMMARY
                                </h1>
                                <p className="text-primary text-xl w-full md:w-4/5">
                                    Solmate is a community-driven project where
                                    every participant, user, and investor can
                                    have a potential say in the SolMate
                                    ecosystem. We believe that our products and
                                    services can increase the value of the
                                    $SOLMATE and $SOUL tokens, our utility and
                                    DAO governance tokens, respectfully.
                                    <br />
                                    <br />
                                    We believe that the SolMate ecosystem will
                                    be successful because it will be
                                    community-driven while also embracing
                                    real-world utility. While many projects fail
                                    because of a lack of interest or lack of
                                    leadership, the SolMate team is dedicated to
                                    consistently showing and proving that we’re
                                    here to stay.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TopNavigator />

            <div
                id="mySidenav"
                className="whitepaperbar  border-r border-primary lg:block hidden text-primary"
                ref={sideNav}
            >
                {!whitepaperMode ? (
                    <a
                        href="javascript:void(0)"
                        className="mx-1 font-bold"
                        onClick={() => setWhitepaperMode(true)}
                    >
                        {'>'}
                    </a>
                ) : (
                    <div className="mx-4">
                        <a
                            href="javascript:void(0)"
                            className="closebtn"
                            onClick={() => setWhitepaperMode(false)}
                        >
                            &times;
                        </a>
                        <h2 className="text-2xl mb-4">TABLE OF CONTENTS</h2>

                        <h3 className="text-xl">
                            <a href="#solmate">SolMate Whitepaper</a>
                        </h3>

                        <div className="text-lg ml-4 mt-2 flex flex-col gap-2">
                            <a href="#about">About SolMate</a>
                            <a href="#tokenomics">SolMate Tokenomics</a>
                            <a href="#outlook">A Crypto Outlook</a>
                            <a href="#ecosystem">The SolMate Ecosystem</a>
                            <a href="#solmask">Sol Mask</a>
                            <a href="#solnexus">SolNexus</a>
                            <a href="#soldao">Soul DAO</a>
                            <a href="#solplanet">SolPlanet</a>
                            <a href="#soldev">SolDEV</a>
                            <a href="#solnft">SolMate NFT</a>
                            <a href="#audit">SolMate Smart Contract Audit</a>
                            <a href="#summary">A SolFul Summary</a>
                        </div>
                    </div>
                )}
            </div>
            <Footer />

            <div className="footer-overlay absolute top-0 w-full min-h-screen h-full"></div>
        </div>
    );
};

export default Whitepaper;
