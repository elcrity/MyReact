import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const About = () => {
  const location = useLocation();
  const [searchParams,setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');
  const onToggleDetail = ()=>{
    setSearchParams({mode, detail: detail === 'true' ? false : true})
  }
  const increaseMode = () =>{
    const nextMode = mode===null ? 1 : parseInt(mode)+1;
    setSearchParams({mode : nextMode, detail})
  }

  return (
    <div>
      <h2>소개</h2>
      <p>소 개</p>
      <p>주소 경로: {location.pathname}</p>
      <p>쿼리스트링: {location.search}</p>
      <p>해시값: {location.hash}</p>
      <p>상태 값: {location.state}</p>
      <p>고유 값: {location.key}</p>
      <p>searchParam: {searchParams}</p>
      <p>searchParam.get: {detail}</p>
      <p>searchParam.get: {mode}</p>
      <button onClick={onToggleDetail}>토글 디테일</button>
      <button onClick={increaseMode}>모드 +1</button>
    </div>
  )
}

export default About