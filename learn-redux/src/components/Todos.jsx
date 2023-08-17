import React from 'react'
import { useState } from 'react';

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}>
      {todo.text}
    </li>
  )
})

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (<TodoItem key={todo.id} todo={todo} onToggle={onToggle}></TodoItem>
      ))}
    </ul>
  )
});

const Todos = ({ todos, onAdd, onToggle }) => {
  const [text, setText] = useState('');
  const onChange = (e) =>{
    setText(e.target.value);
  }
  const onSubmit = (e) =>{
    e.preventDefault()
    onAdd(text);
    setText('');
  }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} placeholder='할 일 입력' onChange={onChange} />
        <button type='submit'>등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle}></TodoList>
    </div >
  )
}

export default Todos