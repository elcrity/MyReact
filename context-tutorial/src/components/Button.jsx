import React, { useContext } from 'react'
import LangContext from './Contexts/LangContext'

const Button = ({OnToggleLang}) => {
  const lang = useContext(LangContext)
  return (
    <button onClick={OnToggleLang}>{lang}</button>
  )
}

export default Button