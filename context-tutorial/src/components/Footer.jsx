import React, { useContext } from 'react'
import { ThemeContext } from './Contexts/ThemeContext'
import { ColorContext } from './Contexts/ColorContext';

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const { background, color } = useContext(ColorContext);

  // {
  //   isDark: false,
  //   setIsDark: () => { }
  // }
  return (
    <div className='footer'
      style={{ background: isDark ? 'black' : 'lightgray', color: isDark ? 'white' : 'black' }}>
      <button style={{ background: background, color: color }} className='button' onClick={() => setIsDark(!isDark)}>버튼</button>
    </div>
  )
}

export default Footer