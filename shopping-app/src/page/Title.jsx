import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'
import nike from '../nike'

export const Title = () => {
  const csst1 = {
    marginTop: '70px',
    textAlign: 'center',
  }
  return (
    <>
      <h3 style={csst1}>MD's Pick</h3>
      <p style={{ textAlign: 'center' }}>
        시선을 사로잡는 스타일링 제품 만나
      </p>
    </>
  )
}

export const Title2 = ({ nikeData, setNikeData }) => {
  const [count, setCount] = useState(2);

  const style = {
    marginTop: '70px',
    textAlign: 'center',
  }

  return (
    <div>
      <h3 style={style}>여름을 위한 컬렉션</h3>
      <Button variant='outline-success btn' count={count} onClick={(e) => {
        setCount(count + 1);
        if (count !== 4) {
          
          axios.get('https://raw.githubusercontent.com/elcrity/MyReact/main/shopping-app/src/nike'+count+'.json')
            .then((result) => {
              const newNike = [...nikeData, ...result.data];
              console.log('nikeData: ', newNike);
              setNikeData(newNike);
            })
        }else{
          e.target.style.display = 'none'; 
        }
      }}> + 3개 상품 더보기</Button>
    </div >
  )
}
