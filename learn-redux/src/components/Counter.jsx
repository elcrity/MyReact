import React from 'react'

const Counter = ({ number, diff, onIncrease, onDecrease, onSetDiff }) => {

  const onChange = (e) => {
    onSetDiff(parseInt(e.target.value, 10))
  }

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <label>변경값 : <input type="number" value={diff} min='1' onChange={onChange} /></label>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  )
}

export default Counter