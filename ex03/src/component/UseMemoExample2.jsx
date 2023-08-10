import React, { useMemo, useState } from 'react'

const UseMemoExample2 = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = (korea) => {
    console.log('korea: ', korea)
    return korea ? '한국' : '외쿡';
  }

  // const country = location(isKorea)
  const country = useMemo(()=>{return location(isKorea)},[isKorea])
  return (
    <div>
      <h2>하루에 몇끼?</h2>
      <input type="number" value={number} onChange={(e)=>
        setNumber(e.target.value)
      } />
      <h2>웨얼?</h2>
      <p>나라 : {country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기</button>
    </div>
  )
}

export default UseMemoExample2