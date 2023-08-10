import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate();

  const goBack = ()=>{
    navigate(-1);
  }

  const goArtis = ()=>{
    navigate('/profiles',{replace:true});
  }
  return (
    <div>
      <header style={{background:'lightgray', padding: '16px', fontSize:'24px'}}>
        <button onClick={goBack}>고 백</button>
        <button onClick={goArtis}>프로필</button>
        헤더
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout