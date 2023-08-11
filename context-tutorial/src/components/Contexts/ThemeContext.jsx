import React, { useState, createContext } from 'react'
import { UserContext } from './UserContext';

export const ThemeContext = createContext(
  {
    isDark: false,
    setIsDark: () => { }
  }
);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const value = { isDark, setIsDark };
  return (
    <UserContext.Provider value={'사용자'}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </UserContext.Provider>

  )
}