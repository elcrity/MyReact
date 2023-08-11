import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react';
import Student from './Student';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      const name = action.payload.name;
      const newStudent = { id: Date.now(), name, isHere: false };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent]
      };
    case 'delete':
      console.log(action.payload.id)
      return {
        count: state.count - 1,
        students: state.students.filter((i) => i.id !== action.payload.id)
      }

    case 'check':
      const checkStudents = state.students.map((i) => {
        if (i.id === action.payload.id)
          return { ...i, isHere: !i.isHere };
        else { return i };
      })
      return {
        count: state.count,
        students: checkStudents
      }


    // action.payload !== 


    default:
      return state;
  }
}

const initState = {
  count: 1,
  students: [{
    id: Date.now(),
    name: '길동쿤',
    isHere: false

  }]
}

const UseReducerEx2 = () => {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>출 석 부</h1>
      <p>총 학생 수 : {studentsInfo.count}</p>
      <input type="text" placeholder='이름.' value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        onKeyDown={e => {
          if (e.key === 'Enter')
            dispatch({ type: 'add', payload: { name } })
        }} />
      {/* <button onClick={() => dispatch({type:'add', payload:{name}})}>추가</button> */}
      <hr />
      {studentsInfo.students.map(student => <Student student={student} dispatch={dispatch}></Student>)}
    </div>
  )
}

export default UseReducerEx2