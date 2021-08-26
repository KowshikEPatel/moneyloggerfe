
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import React from 'react';
import './Summary.css'


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