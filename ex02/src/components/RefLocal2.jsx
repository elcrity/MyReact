import React, { useRef, useState } from 'react'

const RefLocal2 = () => {
  const [render, setRender] = useState(0);
  const cntRef = useRef(0);
  let cntVar = 0;
  const onRendering = () => {
    setRender(render + 1);
  }
  const onIncreaseRef = () =>{
    cntRef.current += 1;
  }
  const onIncreaseVar = () =>{
    cntVar+=1
  }
  const onPrintResult = () =>{
    console.log(`ref : ${cntRef.current}, cntVar : ${cntVar}`)
  }
  return (
    <div>
      Ref : {cntRef.current}
      cntVar : {cntVar}
      <button onClick={onRendering}>렌더링</button>
      <button onClick={onIncreaseRef}>+ref</button>
      <button onClick={onIncreaseVar}>+var</button>
      <button onClick={onPrintResult}>ref var 출력</button>
    </div>
  )
}

export default RefLocal2