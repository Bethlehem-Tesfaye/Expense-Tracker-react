import React from 'react'

export default function Balance({income, expense}) {
  return (
    <div className='balance-cont'>
        <h4>YOUR BALANCE</h4>
        <h1 id="balance">${income-expense}</h1>
    </div>
  )
}
