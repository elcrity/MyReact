import React from 'react'
import TodoListItem from './TodoListItem'
import './TodoList.scss'

const TodoList = ({ lists , dispatch}) => {
  return (
    <div>
      {lists.map(list => (
      <TodoListItem todo={list} key={list.id} dispatch={dispatch} />
      ))}
    </div>
  )
}

export default TodoList