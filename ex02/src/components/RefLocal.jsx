import React, { useRef, useState } from 'react'

const RefLocal = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);
  console.log('렌더링.....');

  const onIncreaseRef = () =>{
    countRef.current += 1;
    console.log(countRef);
  }
  const onIncreaseState = () =>{
    setCount(count+1);
    console.log(count);
  }
  return (
    <div>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={onIncreaseState}>state</button>
      <button onClick={onIncreaseRef}>ref</button>
    </div>
  )
}

export default RefLocal