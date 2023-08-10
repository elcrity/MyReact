import React from 'react'
import Profile from './Profile'
import { Link, Routes, Route, Outlet } from 'react-router-dom'

function Profiles() {
  return (
  <div>
    <li>
      <Link to="velopert">니 이름은 이제부터 민준이여</Link>
    </li>
    <li>
      <Link to="gildong">형을 형이라 부르지 못하고</Link>
    </li>
    <Outlet/>
    {/* <Routes>
      <Route path='/:username' element={<Profile />}></Route>
    </Routes> */}
  </div>
  )
}

export default Profiles
