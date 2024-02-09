import axios from "axios";
import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { API_URL, PRICE_FEED_ADDRESS } from "../constants";
import Aggregator_ABI from '../constants/chainlink.json'
import { ChainType, PresaleState, Token } from "../constants/types";


export function usePresaleInfo(refreshVal: boolean) {

    const [data, setData] = useState<PresaleState | undefined>();

    const fetchPresaleInfo = async () => {
        try {
            const { data: resp } = await axios.get(API_URL + "/presale-info")
            setData(resp);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPresaleInfo();
    }, [
        refreshVal
    ])

    return useMemo(() => {
        return {
            price: data?.price,
            currentSupply: data?.currentSupply,
            totalSupply: data?.totalSupply
        };
    }, [
        data
    ])

}