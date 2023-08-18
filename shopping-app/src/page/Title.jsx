import React from 'react'

export const Title = () => {
  const csst1 = {
    marginTop: '70px',
    textAlign: 'center',
  }
  return (
    <>
      <h3 style={csst1}>MD's Pick</h3>
      <p style={{textAlign:'center'}}>
        시선을 사로잡는 스타일링 제품 만나
      </p>
    </>
  )
}

export const Title2 = () =>{
  const style = {
    marginTop: '70px',
    textAlign: 'center',
  }

  return(
    <div>
      <h3 style={style}>여름을 위한 컬렉션</h3>
    </div>
  )
}
