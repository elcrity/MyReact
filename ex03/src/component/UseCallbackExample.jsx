import React, { useCallback, useEffect, useRef, useState } from 'react'

const UseCallbackExample = () => {
  const [number, setNumber] = useState(0);
  const countRender = useRef(0);
  const [toggle, setToggle] = useState(true);

  // const someFunction = ()=>{
  //   console.log('함수가 생성되었습니다.', {number})
  //   return;
  // }
  
  //동일
  const someFunction = useCallback(()=>{
    console.log('함수가 생성되었습니다.', {number})
    return;
  },[number])

  useEffect(()=>{
    countRender.current += 1;
    console.log('함수가 새로 생성되었습니다',countRender.current)
  },[someFunction])
  
  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={()=>setToggle(!toggle)}>{toggle.toString()}</button>
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  )
}

export default UseCallbackExample