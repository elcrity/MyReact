import React, { useContext } from 'react'
import { ThemeContext } from './Contexts/ThemeContext'

const Content = () => {
  const {isDark, setIsDark} = useContext(ThemeContext);
  return (
    <div className='content'
    style={{background: isDark ? 'black' : 'lightgray', color: isDark? 'white': 'black'}}>
      <p>Good day</p>
    </div>
  )
}

export default Content