import React from 'react'
import './Box.css'
import { useDispatch, useSelector } from 'react-redux'



const Box = () => {
  const str = useSelector(state => state.str);
  return (
    <div className='container'>
      <h1>{str}</h1>
      <div className='grid'>
        <Left1></Left1>
        <Right1></Right1>
      </div>
    </div>
  )
}

const Left1 = () => {
  return (
    <div>
      <h1>Left1</h1>
      <Left2/>
    </div>
  )
}
const Left2 = () => {
  return (
    <div>
      <h1>Left2</h1>
      <Left3/>
    </div>
  )
}
const Left3 = () => {
  const number = useSelector(state => state.number);
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  )
}
const Right1 = () => {
  return (
    <div>
      <h1>right1</h1>
      <Right2/>
    </div>
  )
}
const Right2 = () => {
  return (
    <div>
      <h1>right2</h1>
      <Right3/>
    </div>

  )
}
const Right3 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>right3</h1>
      <button onClick={() => { dispatch({type:'PLUS'}) }}>+</button>

    </div>
  )
}

export default Box