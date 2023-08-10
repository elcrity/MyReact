import React from 'react'
import { useEffect } from 'react'

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 작동중...')
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log('타이머 정지...')
    }
  }, []);
  return (
    <div>
      <span>타이머 시작. 콘솔 확인</span>
    </div>
  )
}

export default Timer