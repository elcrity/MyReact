import React, { useContext } from 'react'
import LangContext from './Contexts/LangContext';

const Title = () => {
  const lang = useContext(LangContext)
  const text = lang === 'en' ? 'Context' : '내용';
  return (
    // <LangContext.Consumer>
    //   {(lang)=>{
    //     const text = lang === 'en' ? 'Context' : '내용';
    //     return(<h1>{text}</h1>);
    //   }}

    // </LangContext.Consumer>

    <h1>{text}</h1>
  )
}

export default Title