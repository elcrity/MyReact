import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import TourList from './TourList'
import TourSpot from '../tourSpot.json'
import TourGrid from '../components/TourGrid'
import DetailInfo from './DetailInfo'
// import tourSpots from '../tourSpot.json'
import restaurant from '../restaurant.json'
import lodge from '../lodge .json'
import axios from 'axios'

const Main = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path='/test1/:pageId' element={<TourList data={TourSpot}/>}></Route>
        <Route path='/test1/detail' element={<DetailInfo />}></Route>
      </Routes>
    </div>

  )
}

export default Main