import React, {useEffect, useState} from 'react' 
import {useSelector} from "react-redux"

import useCalculator from "../hooks/useCalculator"

const TransactionBalance = () => {
    const storeList= useSelector(state => state.items)
    const {items} =storeList
    

    const [balance, setBalance] = useState(0)
    
    const calculatedIncome = useCalculator(items, "income")
    const calculatedExpenses = useCalculator(items, "expenses")
    const calculatedBalance =calculatedIncome - calculatedExpenses
    
    useEffect(() => {
        setBalance(calculatedBalance) 
    }, [items])
    return (
        <div className="transaction-balance">
            <h6> YOUR BALANCE</h6>
            <h4> ${balance}</h4>
        </div>
    )
}

export default TransactionBalance
