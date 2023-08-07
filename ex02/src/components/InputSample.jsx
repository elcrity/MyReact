import React, { useRef, useState } from 'react'

const InputSample = () => {
  const nameInput = useRef();
  const [inputs, setInputs] = useState({
    name: '', nickname: ''
  });
  const {name, nickname} = inputs;
  console.log(inputs)
  const onChange = (e) => {
    const { name, value } = e.target;//name = input의 name의 value, value는 input의 value의 value
    
    setInputs({
      ...inputs,
      //name : ''
      //nickname : ''
      [name]: value
      //a[0] -> name이면 a[name]으로도 값을 가져옴
      //name, 'test'
      //nickname, 'testnick'
    });
    
  }
  return (
    <div>
      <input name='name' placeholder='이름' value={name} onChange={onChange} ref={nameInput}/>
      <input name='nickname' placeholder='nickname' value={nickname} onChange={onChange} />
      <button onClick={() => {
        setInputs({name:'', nickname:''});
      }}>초기화</button>
      <div>
        <b>값 : {name} {nickname}</b>
      </div>
    </div>
  )
}

export default InputSample