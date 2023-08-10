import React from 'react'
import TodoListItem from './TodoListItem'
import './TodoList.scss'

const TodoList = ({ lists , onDelete , onToggle}) => {
  return (
    <div>
      {lists.map(list => (
      <TodoListItem todo={list} key={list.id} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default TodoList