import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/TransactionContext';
import axios from 'axios';

export default function Transaction(props) {
    const sign = props.value.amount < 0 ?{class:"minus",sym:'-'}:{class:"plus",sym:'+'}
    const { deleteTransaction } = useContext(GlobalContext)

    async function deleteOnServer(id){
        let response = await axios({
            method:'post',
            url:'https://kp-expensetrackker.herokuapp.com/transaction/delete',
            data:{
              id,
            }
          })
          console.log(response)
    }
    
    return (
        <li className={sign.class} key={props.value._id+'li'}>
             {props.value.text} <span key={props.value._id+'span'}> INR {Math.abs(props.value.amount)}</span><button key={props.value._id+'button'} className="delete-btn" onClick={()=>{
                 deleteOnServer(props.value._id)
                 deleteTransaction(props.value._id)
                 }}>x</button>
        </li>
    )
}
