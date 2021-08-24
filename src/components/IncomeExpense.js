import React from 'react'
//import { GlobalContext } from '../contexts/TransactionContext',{useContext}

export default function IncomeExpense() {
    //const context = useContext(GlobalContext)
    //let amountsList = context.transactions.map(e=>e.amount)
    //let incomeSum = amountsList.filter(e=>{if(e>0) {return e} else{return 0 }}).reduce((sum,e)=>sum+e) 
    //let expenseSum = amountsList.filter(e=>{if(e<0){return e} else{return 0 }}).reduce((sum,e)=>sum+e) 
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">INR 500</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">INR 100</p>
        </div>
      </div>
    )
}
