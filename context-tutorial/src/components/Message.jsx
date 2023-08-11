import React, { useContext } from 'react'
import LangContext from './Contexts/LangContext';

const Message = () => {
  const lang = useContext(LangContext)
  console.log('message : ', lang);
  const message = lang ==='en' ? <p>{lang} : Context provides</p> : <p>{lang} : 내용은 어쩌구 </p>;
  
  return (
    <div>{message}</div>
  )
}

export default Message