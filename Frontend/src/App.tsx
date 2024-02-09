import React, { FC } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { WalletConnectProvider } from './components/WalletConnectProvider';
import { Chain, chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Stake from './pages/Stake';
import Presale from './pages/Presale';
import Whitepaper from './pages/Whitepaper';
import Dashboard from './pages/Dashboard';
import FAQ from './pages/FAQ';
import ContactUS from './pages/ContactUS';

require('./App.css');

const ethChain = chain.mainnet;
const ethTestChain = chain.goerli;

const bscChain: Chain = {
    id: 56,
    name: 'BSC Mainnet',
    network: 'bsc',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'BNB',
    },
    rpcUrls: {
        default: 'https://bsc-dataseed.binance.org',
    },
    blockExplorers: {
        default: { name: 'BscScan', url: 'https://bscscan.com' },
    },
    testnet: false,
}
const bscTestChain: Chain = {
    id: 97,
    name: 'BSC Testnet',
    network: 'bsc-testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Test BNB',
        symbol: 'tBNB',
    },
    rpcUrls: {
        default: 'https://data-seed-prebsc-2-s1.binance.org:8545',
    },
    blockExplorers: {
        default: { name: 'BscScan Testnet', url: 'https://testnet.bscscan.com' },
    },
    testnet: true,
}

const { chains, provider } = configureChains(
    [ethTestChain, bscTestChain],
    [
        infuraProvider({ apiKey: 'b5bf9c37aa8d42c8b48e27d45a10c8d3' }),
        jsonRpcProvider({
            rpc: (chain) => {
                if (chain.id === bscChain.id
                    || chain.id === bscTestChain.id) return { http: chain.rpcUrls.default }
                return null
            },
        }),
    ],
)

const client = createClient({
    autoConnect: true,
    connectors: [
        new InjectedConnector({ chains }),
        new MetaMaskConnector({ chains }),
    ],
    provider
})

export const App: FC = () => {
    return (
        <div>
            <WagmiConfig client={client}>
                <WalletConnectProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/stake" element={<Stake />} />
                            <Route path="/presale" element={<Presale />} />
                            <Route path="/dashboard" element={<Dashboard />} >
                                <Route path="/dashboard/:id" element={<Dashboard />} />
                            </Route>
                            <Route path="/whitepaper" element={<Whitepaper />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/contactus" element={<ContactUS />} />
                        </Routes>
                    </BrowserRouter>

                    <ToastContainer />
                </WalletConnectProvider>
            </WagmiConfig>
        </div>
    );
};
