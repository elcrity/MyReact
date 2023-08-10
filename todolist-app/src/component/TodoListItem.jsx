import React from 'react'
import cn from 'classnames';

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItem = ({ todo, onDelete, onToggle }) => {
  const { id,text, checked } = todo;

  return (
    <div className='TodoListItem'>
      <div className={cn('checkbox', { checked })} onClick={()=>{onToggle(id)}}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="delete" onClick = {()=>{onDelete(id)}}><MdRemoveCircleOutline /></div>
    </div>
  )
}

export default TodoListItem