import axios from "axios";
import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { API_URL } from "../constants";
import { PurchaseState } from "../constants/types";


export function useMyPurchaseInfo(walletAddress: String) {

    const [myTransactions, setMyTransactions] = useState<PurchaseState[] | []>([]);
    const [amounts, setAmounts] = useState({
        eth: 0,
        bnb: 0,
        sol: 0,
        stables: 0,
        solmate: 0
    });

    const fetchMyPurchaseInfo = async () => {
        try {
            let { data: resp } = await axios.get(API_URL + "/mypurchase-info/" + walletAddress);
            setAmounts({
                eth: resp.amountETH,
                bnb: resp.amountBNB,
                sol: resp.amountSOL,
                stables: resp.amountStables,
                solmate: resp.amountSolMate
            })
            let rawData = resp.myTransactions.map((el: any) => ({
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
            setMyTransactions(rawData);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchMyPurchaseInfo();
    }, [
        walletAddress
    ])

    return useMemo(() => {
        return {myTransactions, amounts};
    }, [
        myTransactions, amounts
    ])

}