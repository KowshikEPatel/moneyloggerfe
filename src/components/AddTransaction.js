import React,{useState,useContext} from 'react';
import { GlobalContext } from '../contexts/TransactionContext';
//import axios from 'axios';,useEffect

export default function AddTransaction() {
    
    const [text,setText] = useState()
    const [amount,setAmount] = useState()

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = (e)=>{
      e.preventDefault();
      document.getElementById("text").value=''
      document.getElementById("amount").value=''
     
      addTransaction({
        id:(+1000*Math.random()),
        text,
        amount:+amount
      })
    }
    return (<>
        <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..."  onChange={(e)=>{setText(e.target.value)}}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" placeholder="Enter amount..." onChange={(e)=>{setAmount(e.target.value)}}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
      </>
    )
}
