import React from 'react'
import { useState } from 'react'
// import './TourList.css'

const TourItem = ({spot}) => {
  // console.log('spot: ', spot);

  
  return (
    <li className='list-itemGrid'>
      <div className='list-itemGrid-img'>
        <img src={spot.repPhoto.photoid.thumbnailpath} alt={spot.photoid} width={'200px'} height={'100px'}/>
      </div>
      <div className='list-itemGrid-content'>
        <h4>{spot.title}</h4>
        <p>{spot.region1cd.label} > {spot.region2cd.label}</p>
        <p>{spot.tag.split(', ').map(tag => ('#' + tag + ' '))}</p>
      </div>
    </li>
  )
}

export default TourItem