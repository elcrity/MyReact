import React from 'react'
import { useContext } from 'react'
import { SquareValue } from './SquareValue'

export const Square = () => {
  const val = useContext(SquareValue)
  return <button className='square'
  onClick={(e)=>{
    console.log(e.target.content)
  }}>{val}</button>
}
