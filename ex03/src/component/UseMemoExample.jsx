import React, { useMemo, useState } from 'react'

const hardCalculator = (number) => {
  let now = Date.now();
  let start = now;
  while (now < start + 2000) {
    now = Date.now();
  }
  console.log('hard Cal');
  return number + 1000;
}

const easyCalculator = (number) => {
  console.log('easy Cal');
  return number + 1;
}

const UseMemoExample = () => {
  const [hardNum, setHardNum] = useState(0);
  const [easyNum, setEasyNum] = useState(0);

  // const easySum = easyCalculator(easyNum);
  // const hardSum = hardCalculator(hardNum);
  const easySum = useMemo(()=>easyCalculator(easyNum),[easyNum]);
  const hardSum = useMemo(()=>hardCalculator(hardNum),[hardNum]);

  return (
    <div>
      <h3>어려운 계싼기</h3>
      <input type="number" value={hardNum} onChange={(e)=>{
        setHardNum(parseInt(e.target.value));
      }}/>
      <span>+ 1000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input type="number" value={easyNum} onChange={(e)=>{
        setEasyNum(parseInt(e.target.value));
      }}/>
      <span>+ 1 = {easySum}</span>
    </div>
  )
}

export default UseMemoExample