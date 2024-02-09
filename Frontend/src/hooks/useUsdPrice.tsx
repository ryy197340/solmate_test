import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { PRICE_FEED_ADDRESS } from "../constants";
import Aggregator_ABI from '../constants/chainlink.json'
import { ChainType, Token } from "../constants/types";


export function useUsdPrice(token: Token | undefined) {

    const [price, setPrice] = useState<number | undefined>();

    const fetchFeed = async () => {
        if (token) {
            const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/eth');
            const priceFeed = new ethers.Contract(PRICE_FEED_ADDRESS[token.chainType], Aggregator_ABI, provider)
            let result: any = 0
            try {
                const roundData = await priceFeed.latestRoundData()
                result = (parseFloat((roundData.answer)) / 100000000.0)
                setPrice(result);
            } catch (e) {
                console.log(e);
            }
        }
    }

    useEffect(() => {
        fetchFeed();
    }, [
        token
    ])

    return useMemo(() => {
        return {
            price
        };
    }, [
        price
    ])

}