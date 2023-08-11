import React, { useContext } from 'react'
import { ThemeContext } from './Contexts/ThemeContext'
import { UserContext } from './Contexts/UserContext';

const Header = () => {
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div className='header'
      style={{background: isDark ? 'black' : 'lightgray', color: isDark? 'white': 'black'} }>
      <h1>Welcome {user}</h1>
    </div>
  )
}

export default Header