import React,{useState,useContext} from 'react';
import { GlobalContext } from '../contexts/TransactionContext';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';

export default function AddTransaction() {
    
    const [text,setText] = useState('')
    const [amount,setAmount] = useState('')
    const [type,setType] = useState('')

    const { addTransaction } = useContext(GlobalContext)
    const usercontext = useContext(UserContext)

    async function onAdd(e){
      e.preventDefault()
      
      let response = await axios({
        method:'post',
        url:'https://kp-expensetrackker.herokuapp.com/transaction/add',
        data:{
          text,
          type,
          user:usercontext.loggedUser.user["userid"],
          amount:+amount
        }
      })
      
      if(response.data){
        addTransaction({
          id:response.data._id,
          text:response.data.text,
          type:response.data.type,
          amount:response.data.amount
        })
        setText('');
        setAmount('');
        setType('');
      }
    }
    return (<>
              <h3>Add new transaction</h3>
                <form id="form">
                  <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..."  onChange={(e)=>{setText(e.target.value)}}/>
                  </div>
                  <div className="form-control">
                    <label htmlFor="type">Type</label>
                    <input type="text" id="type" placeholder="Enter type..."  onChange={(e)=>{setType(e.target.value)}}/>
                  </div>
                  <div className="form-control">
                    <label htmlFor="amount"
                      >Amount <br />
                      (negative - expense, positive - income)</label>
                    <input type="number" id="amount" placeholder="Enter amount..." onChange={(e)=>{setAmount(e.target.value)}}/>
                  </div>
                  <button className="btn" onClick={onAdd}>Add transaction</button>
                </form>
            </>
    )
}
