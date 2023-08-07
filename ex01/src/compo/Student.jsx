// import React from "react";

const Student = ()=>{
  const style = {
    color : 'red',
    backgroundColor : 'yellow',
    fontSize : '30px'
  }

  const name = 'ㅁㅁㅁ';
  const nickname = 'aaa';
  const nickname2 = '';

  return(
    <div>
      <h1 style={style}></h1>
      {name === 'ㅁㅁㅁ' ? <h2>{name}입니다</h2> : <h2>no{name}</h2>}
      {/* && - 있으면, || - 없으면 */}
      {nickname && <h2>ㅁㅁㅁ의 별명은 {nickname}입니다.</h2>}
      {nickname2 || <h2>별명이 없습니다</h2>}
    </div>
  )
}

export default Student;