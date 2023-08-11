import React from 'react'
import { Square } from './Square'

const Board = () => {
  return (
    <>
      <div className='row'>
        <Square value='1' />
        <Square />
        <Square />
      </div>
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}

export default Board