import React from 'react'
import cn from 'classnames';

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItem = ({ todo, dispatch }) => {
  const { id,text, checked } = todo;

  return (
    <div className='TodoListItem'>
      <div className={cn('checkbox', { checked })} onClick={()=>{dispatch({type:'toggle',item:{id}})}}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="delete"onClick={()=>dispatch({type:'delete', item :{id}})}><MdRemoveCircleOutline /></div>
    </div>
  )
}

export default TodoListItem