import React,{ useContext } from 'react'
import { GlobalContext } from '../contexts/TransactionContext'
import Transaction from './Transaction'

export default function TransactionList() {
    const contextData = useContext(GlobalContext)
    
    return (<>
        <h3>History</h3>
        <ul id="list" className="list">
             {contextData.transactions.map(transac =><Transaction key={transac._id} value = {transac}/>)}
        </ul>
      </>
    )

}
