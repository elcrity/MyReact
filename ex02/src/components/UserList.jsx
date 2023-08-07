import React from 'react'

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