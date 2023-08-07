import React, { useState } from 'react'

const Cnt2 = () => {
  const [cnt,setCnt] = useState(0);

  const incCnt = () => {
    setCnt(cnt => cnt+1)
  }
  const decCnt = () => {
    setCnt(cnt => cnt-1)
  }
  return (
    <div>
      <h1>{cnt}</h1>
      <button onClick={incCnt}>+1</button>
      <button onClick={decCnt}>-1</button>
    </div>
  );
}

export default Cnt2