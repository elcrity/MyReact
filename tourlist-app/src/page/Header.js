import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/test1'>관광지</Link>
      <Link to='/test1/2'>음식</Link>
      <Link to='/test1/3'>숙박</Link>
      <Link to='/test2'>링크2</Link>
      <Link to='/test3'>링크3</Link>
    </div>
  )
}

export default Header