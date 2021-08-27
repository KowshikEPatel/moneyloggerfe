import React,{useContext} from 'react'
import { GlobalContext } from '../contexts/TransactionContext'

export default function IncomeExpense() {
    const context = useContext(GlobalContext)
    let amountsList = 0,incomeList = [],incomeSum = 0,expenseList = [],expenseSum = 0;
    if(context.transactions.length>0){
    amountsList = context.transactions.map(e=>e.amount)
    incomeList = amountsList.filter(e=>{if(e>0) {return e} else{return 0 }}) 
      if(incomeList.length>0){
        incomeSum = incomeList.reduce((sum,e)=>sum+e);
      }
      else{
        incomeSum=0;
      }
    expenseList = amountsList.filter(e=>{if(e<0){return e} else{return 0 }})
      if(expenseList.length>0){
        expenseSum = expenseList.reduce((sum,e)=>sum+e) 
      }
      else{
        expenseSum = 0;
      }
    }
    return (
        <div className="inc-exp-container">
        <div className="m-2">
          <h4>Income</h4>
          <p id="money-plus" className="money plus">INR {incomeSum}</p>
        </div >
        <div className="m-2">
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">INR {Math.abs(expenseSum)}</p>
        </div>
      </div>
    )
}
