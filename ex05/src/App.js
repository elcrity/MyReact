import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BtnContext } from './Context/BtnContext';
import Btn from './Compo/Btn';
import { useReducer } from 'react';
import UseReducerEx1 from './Compo/UseReducerEx1';



function App() {
  const [number, SetNumber] = useState(0);



 

  function countReducer(oldCount, action) {
    switch (action.type) {
      case 'UP':
        return oldCount + action.number;
      case 'DOWN':
        return oldCount - action.number;
      default:
        return 0;
    }

  }
  const [num, countDispatch] = useReducer(countReducer, 0);
  function down() {
    countDispatch({type:'DOWN', number:number});
  }
  function up() {
    countDispatch({type:'UP', number:number});
  }
  function reset() {
    countDispatch('RESET');
  }

  function changeNumber(e) {
    SetNumber(Number(e.target.value));
  }

  return (
    <div>
      {/* <input type="button" value='-' onClick={down} />
      <input type="button" value='0' onClick={reset} />
      <input type="button" value='+' onClick={up} />
      <input type="text" value={number} onChange={changeNumber} />
      <span>{num}</span> */}
      
    </div>
  );
}

export default App;
