import React, { useCallback, useState } from 'react'
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss'

const TodoInsert = ({dispatch}) => {
  const[value, setValue] = useState('');

  const onSubmit = useCallback((e) =>{
    setValue('');
    e.preventDefault();
  })

  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input type="text" placeholder='할 일을 입력하세요' value={value} onChange={(e) => {
          setValue(e.target.value);
        }}/>
      <button type='submit' onClick={()=>dispatch({type:'insert', item :{value}})} ><MdAdd/></button>
    </form>
  )
}

export default TodoInsert