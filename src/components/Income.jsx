import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AddContext } from './Add'
import Balance from './Balance';

export default function Income() {

    const {transactions} = useContext(AddContext)
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    useEffect(()=>{
         
        const totalIncome = transactions.filter((transaction)=>parseFloat(transaction.amount)>0
        ).reduce((acc, curr)=>acc+ parseFloat(curr.amount),0);
        setIncome(totalIncome);
        const totalExpense = transactions.filter((transaction)=>parseFloat(transaction.amount)<0).reduce((acc, curr)=>acc + Math.abs(parseFloat(curr.amount)),0);
        setExpense(totalExpense);
        //  or 
        //  let sum =0;
        //   for(let i=0;i<totalIncome.length;i++){
        //     sum += parseFloat(totalIncome[i].amount);
        //   }
        //   setIncome(sum);
    
    },[transactions])


  return (
    <>
     <Balance income={income} expense={expense}></Balance>
     <div className="income-cont">
        <div className="income">
            <h4>INCOME</h4>
            <h2 id="income_balance">${income}</h2>
        </div>
        <div className="vertical">

        </div>
        <div className="expense">
            <h4>EXPENSE</h4>
            <h2 id="expense_balance">${expense}</h2>
        </div> 
     </div>
     </>
  )
}
