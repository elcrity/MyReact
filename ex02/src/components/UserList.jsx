import React from 'react'
import { useEffect } from 'react'

const UserList = ({ users, onDelete, onToggle }) => {
  
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  )
}

const User = ({ user, onDelete, onToggle }) => {
  // useEffect(()=>  {
  //   console.log('컴포넌트가 화면에 나타남');
  //   return () =>{
  //     console.log('컴포넌트가 화면에 사라짐')
  //   }
  // },[]); //dependency array(deps)

  // useEffect(()=>{
  //   console.log('user : ');
  //   return () =>{
  //     console.log('user값 바뀌기 전...');
  //   }
  // },[user])

  // useEffect(()=>{
  //   console.log(user);
  // })
  return (
    <div>
      <b style={
        {
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }
      } onClick={() => onToggle(user.id)}>{user.username}</b> <span>{user.email}</span> <button onClick={() => onDelete(user.id)} >삭제</button>
    </div>
  )
}

export default UserList