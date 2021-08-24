
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import React from 'react'

export default function Summary() {
    return (
        <div className='containerSummary'>
            <Balance></Balance>
            <IncomeExpense></IncomeExpense>
            <TransactionList></TransactionList>
            <AddTransaction></AddTransaction>
        </div>
    )
}