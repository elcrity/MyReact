import React, { useState } from 'react'

const EventPractice = () => {
  const [info, setInfo] = useState({ message: '', username: '' });
  const { message, username } = info;
  console.log(info);

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log('e.target: ', e.target);
    setInfo({
      ...info,
      [name]: value
    });
  }
  const onClick = () => {
    setInfo({ message: '', username: '' })
  }
  return (
    <div>
      <h1>[이벤트 연습]</h1>
      <input name='username' value={username} placeholder='사용자명' onChange={onChange} />
      <input name='message' value={message} placeholder='입-력' onChange={onChange} onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick();
        }
      }} />
      <div>{username}{message}</div>
      <button onClick={onClick}>확인</button>
    </div>
  )
}

export default EventPractice