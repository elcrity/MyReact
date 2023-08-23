import React from 'react'
import { Navigate } from 'react-router-dom'

const TourItem = ({spot,pageType,navigate}) => {
  
  const onNav = () =>{
    navigate('/test1/detail',{
      state : {
        title : spot.title,
        img : spot.repPhoto.photoid.imgpath,
        tag : spot.tag,
        address : spot.address,
        phoneno : spot.phoneno
      }
    })
  }

  return (
    <li className={`${pageType}-itemGrid`} onClick={onNav}>
      <div className={`${pageType}-itemGrid-img`}>
        <img src={spot.repPhoto.photoid.thumbnailpath} alt={spot.photoid} width={'200px'} height={'100px'}/>
      </div>
      <div className={`${pageType}-itemGrid-content`}>
        <h4>{spot.title}</h4>
        <p>{spot.region1cd.label} > {spot.region2cd.label}</p>
        <p>{spot.tag.split(', ').map(tag => ('#' + tag + ' '))}</p>
      </div>
    </li>
  )
}

export default TourItem