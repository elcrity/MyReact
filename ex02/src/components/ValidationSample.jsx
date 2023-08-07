import React, { useState } from 'react'
import { useRef } from 'react';
import './ValidationSample.css'


const ValidationSample = () => {
  const [passwd, setPasswd] = useState('');
  const [validate, setValidate] = useState(false);
  const [clicked, setClicked] = useState(false);
  const inputValid = useRef(null);

  const onClick = () =>{
    setClicked(true);
    setValidate(passwd === '0000')
    inputValid.current.focus();
  }
  const onChange = (e) =>{
    setPasswd(e.target.value);
  }
  return (
    <div>
      <input type="password" value={passwd} onChange={onChange}
        className={clicked ? (validate ? 'success' : 'failure') : ''} ref = {inputValid} />
      <button onClick={onClick}>확인</button>
    </div>
  )
}

export default ValidationSample