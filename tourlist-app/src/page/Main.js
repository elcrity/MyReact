import React from 'react'
import {Routes, Route} from 'react-router-dom'
import TourList from '../components/TourList'
import TourGrid from '../components/TourGrid'
import DetailInfo from '../components/DetailInfo'
import tourSpots from '../tourSpot.json'
import restaurant from '../restaurant.json'
import lodge from '../lodge .json'

const Main = () => {
  return (
   <div className='main'>
      <Routes>
        <Route path='/test1' element={<TourList data={tourSpots} />}></Route>
        <Route path='/test1/2' element={<TourList  data={restaurant}/>}></Route>
        <Route path='/test1/3' element={<TourList data={lodge} />}></Route>
        <Route path='/test2' element={<TourGrid/>}></Route>
        <Route path='/test3' element={<DetailInfo/>}></Route>
      </Routes>
   </div>
    
  )
}

export default Main