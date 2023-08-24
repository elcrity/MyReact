import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TourList from '../listTour/TourList'
import DetailInfo from '../detailTour/DetailInfo'

const Main = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path='/test1/:pageId' element={<TourList/>}></Route>
        <Route path='/test1/detail/:id' element={<DetailInfo />}></Route>
      </Routes>
    </div>

  )
}

export default Main