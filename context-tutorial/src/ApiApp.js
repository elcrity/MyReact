import React, { useContext, useState } from 'react'
import Button from './components/Button';
import Message from './components/Message';
import LangContext from './components/Contexts/LangContext';
import Title from './components/Title';
import ColorContext from './components/Contexts/Color';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './components/Contexts/Color';
import SelectColors from './components/SelectColors';
import Page from './components/Page';
import './App.scss'
import { ThemeContext, ThemeProvider } from './components/Contexts/ThemeContext';

const ApiApp = () => {
  const initLang = useContext(LangContext);
  const [lang, setLang] = useState(initLang);
  const OnToggleLang = () => {
    const changeLang = lang === 'en' ? 'kr' : 'en';
    setLang(changeLang);
  }


  const [isDark, setIsDark] = useState(false);
  const value = { isDark, setIsDark };
  console.log(value)

  return (
    <div>
      {/* <LangContext.Provider value={lang}>
        <Title></Title>
        <Button OnToggleLang={OnToggleLang}></Button>
        <Message></Message>
      </LangContext.Provider> */}

      {/* <ColorContext.Provider value={{ color: 'red' }}>
        <div>
          <ColorBox />
        </div>
      </ColorContext.Provider> */}

      {/* <ColorProvider>
        <SelectColors />
        <ColorBox />
      </ColorProvider> */}

      <hr />
      <ThemeProvider>
        <Page />
      </ThemeProvider>


    </div>
  )
}

export default ApiApp