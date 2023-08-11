import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'

const UseReducerEx1 = () => {
  const [number, setNumber] = useState(0);

  const [balance, budgetDispacther] = useReducer(budgetReducer, 1000);

  function budgetReducer(oldBudget, action){ //balance, budgetDispacther({type:"DEPOSIT", money:number})
    switch (action.type) {
      case "DEPOSIT":
          return oldBudget + action.money; //balance + number;
      case "WITHDRAW":
        // return oldBudget - action.money;
        return oldBudget - action.money;
      default:
        break;
    }
  }

  function deposit(){
    budgetDispacther({type:"DEPOSIT", money:number});
  }
  function withdraw(){
    budgetDispacther({type:"WITHDRAW", money:number});
  }
  

  return (
    <div>
      <h2>웰컴투더 은행</h2>
      <p>잔고 : {balance}원</p>
      <input type="number"
        value={number}
        step={1000}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }} />
        <button onClick={deposit}>예금</button>
        <button onClick={withdraw}>출금</button>
    </div>
  )
}

export default UseReducerEx1