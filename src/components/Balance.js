import React from 'react'
//import { GlobalContext } from '../contexts/TransactionContext',{useContext}

export default function Balance() {
    //const context = useContext(GlobalContext)
    //const amountsList = context.transactions.map(e=>e.amount)
    //const total = amountsList.reduce((sum,e)=>sum+e).toFixed(2){total}
    
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">INR 400 </h1>
        </div>
    )
}
