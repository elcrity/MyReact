import React from 'react'

const TodoHead = () => {
  const date = new Date();

  const dateString = date.toLocaleString('ko-kr', {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const day = date.toLocaleString('ko-kr', {
    weekday: 'long'
  }
  )
  return (
    <div>
      <h1>{dateString}</h1>
      <div className='day'>{day}</div>
      <div className='leftTodo'>할 일 {}개 남음</div>
    </div>
  )
}

export default TodoHead