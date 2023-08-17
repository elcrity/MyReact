import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo, toggleTodo } from '../modules/todos'
import { useCallback } from 'react'
import Todos from '../components/Todos'

const TodosContainer = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();
  const onAdd = text => dispatch(addTodo(text));
  const onToggle = useCallback(id => dispatch(toggleTodo(id)),[dispatch]);
  return (
    <Todos todos={todos} onAdd={onAdd} onToggle={onToggle}></Todos>
  )
}

export default TodosContainer