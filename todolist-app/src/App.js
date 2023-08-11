import logo from './logo.svg';
import './App.css';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';
import { useCallback, useReducer, useRef, useState } from 'react';

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
  const [lists, dispatch] = useReducer(reducer, items);

  function reducer(item, action) {
    switch (action.type) {
      case 'insert':
        console.log('item : ' , item);
        const list = {
          id: nextId.current,
          text: action.item.value,
          checked: false
        };
        const newLists = [...item , list]
        // setItems(items.concat(list));
        nextId.current += 1;
        return newLists;

      case 'delete':
        // setItems(items.filter(item => item.id !== action.item.id));
        return item.filter(i => i.id !== action.item.id)
      
      case 'toggle':
        // setItems(items.map(item => item.id === action.item.id ? { ...item, checked: !item.checked } : item))
        return item.map(s => s.id === action.item.id ? { ...s, checked: !s.checked } : s)

      default:
        break;
    }
  }


  return (
    <div className="App">
      <TodoTemplate children={
        <div>
          <TodoInsert dispatch={dispatch} />
          <TodoList lists={lists} dispatch={dispatch} />
        </div>
      }>
      </TodoTemplate>
    </div>
  );
}

export default App;
