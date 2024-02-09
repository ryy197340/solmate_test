import axios from "axios";
import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { API_URL } from "../constants";
import { PurchaseState } from "../constants/types";


export function usePurchaseInfo(refreshVal: boolean) {

    const [data, setData] = useState<PurchaseState[] | []>([]);

    const fetchPurchaseInfo = async () => {
        try {
            let { data: resp } = await axios.get(API_URL + "/purchase-info");
            let rawData = resp.map((el: any) => ({
                id: el.id,
                chainId: el.chain_id,
                transaction: el.tx_hash,
                from: el.from,
                tokenAddress: el.token_address,
                tokenAmount: el.token_amount,
                Amount: el.amount,
                status: el.status,
                createDate: el.create_date
            }))
            setData(rawData);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPurchaseInfo();
    }, [
        refreshVal
    ])

    return useMemo(() => {
        return data;
    }, [
        data
    ])

}