import React from 'react'
import { useContext } from 'react'
import { BtnContext } from '../Context/BtnContext'

const UpBtn = ({onClick,children}) => {
  const{num,setNum} = useContext(BtnContext)
  return <button onClick={setNum({onClick})}>{children}</button>
}

export default UpBtn