import React,{useContext} from 'react'
import { GlobalContext } from '../contexts/TransactionContext'

export default function Balance() {
    const context = useContext(GlobalContext)
    let total = 0;
    if(context.transactions.length>0){
        const amountsList = context.transactions.map(e=>e.amount)
        total = amountsList.reduce((sum,e)=>sum+e).toFixed(2)
    }
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">INR {total}</h1>
        </div>
    )
}
