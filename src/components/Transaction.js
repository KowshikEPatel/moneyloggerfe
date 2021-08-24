import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/TransactionContext'


export default function Transaction(props) {
    const sign = props.value.amount < 0 ?{class:"minus",sym:'-'}:{class:"plus",sym:'+'}
    const { deleteTransaction } = useContext(GlobalContext)
    
    return (
        <li className={sign.class}>
             {props.value.text} <span> INR {Math.abs(props.value.amount)}</span><button className="delete-btn" onClick={()=>deleteTransaction(props.value.id)}>x</button>
        </li>
    )
}
