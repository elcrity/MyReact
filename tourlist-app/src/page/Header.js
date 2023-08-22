import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <span><Link to='/test1/1?type=list'>관광지</Link></span>
      <span><Link to='/test1/2'>음식</Link></span>
      <span><Link to='/test1/3'>숙박</Link></span>
      <span><Link to='/test2'>링크2</Link></span>
      <span><Link to='/test3'>링크3</Link></span>
    </div>
  )
}

export default Header