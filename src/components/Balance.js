import React,{useContext} from 'react'
import { GlobalContext } from '../contexts/TransactionContext'

export default function Balance() {
    const context = useContext(GlobalContext)
    //const amountsList = context.transactions.map(e=>e.amount)
    //const total = amountsList.reduce((sum,e)=>sum+e).toFixed(2){total}
    
    return (
        <div>
            <h6>{JSON.stringify(context)}</h6>
            <h4>Your Balance</h4>
            <h1 id="balance">INR 400 </h1>
        </div>
    )
}
