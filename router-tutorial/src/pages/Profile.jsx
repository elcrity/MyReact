import React from 'react'
import { useParams, Link, Routes, Route } from 'react-router-dom'

const data = {
  velopert: {
    name: '민준 킴',
    description: '홀리몰리'
  },
  gildong: {
    name: '홍길 동',
    description: '아버지를 아버지라 부르지 못하고'
  }
}



const Profile = () => {
  const params = useParams();
  console.log('params: ', params);
  const profile = data[params.username];
  console.log('profile: ', profile);


  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? 
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div> 
        : <p>존재하지 않음</p>
      }
    </div>
  )
}

export default Profile