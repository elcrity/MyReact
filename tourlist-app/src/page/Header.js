import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <span><Link to='/test1/tour'>관광지</Link></span>
      <span><Link to='/test1/restaurant'>음식</Link></span>
      <span><Link to='/test1/lodge'>숙박</Link></span>
      <span><Link to='/test2'>링크2</Link></span>
      <span><Link to='/test3'>링크3</Link></span>
    </div>
  )
}

export default Header