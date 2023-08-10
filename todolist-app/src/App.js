import logo from './logo.svg';
import './App.css';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';
import { useCallback, useRef, useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: 'bbb',
      checked: false
    }, {
      id: 3,
      text: 'ccc',
      checked: false
    }
  ])
  const nextId = useRef(4);

  const onInsert = useCallback(text =>{
    const list = {
      id : nextId.current,
      text,
      checked : false
    };
    setItems(items.concat(list));
    nextId.current += 1;
  },[items])

  const onDelete = useCallback(id =>{
    setItems(items.filter(item => item.id !== id));
  },[items])

  const onToggle = useCallback(id=>{
    setItems(items.map(item=> item.id === id ? {...item, checked : !item.checked} : item))
  },[items])

  return (
    <div className="App">
      <TodoTemplate children={
        <div>
          <TodoInsert onInsert={onInsert}/>
          <TodoList lists={items} onDelete={onDelete} onToggle={onToggle}/>
        </div>
      }>
      </TodoTemplate>
    </div>
  );
}

export default App;
