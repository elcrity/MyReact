import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

function reducer(currentState, action) {
  if (currentState === undefined) {
    return { number: 1, str:'root' }
  };

  const newState = { ...currentState };

  if (action.type === 'PLUS') {
    newState.number++;
  }
  return newState;
}

const store = createStore(reducer);

function App() {
  // const increase = () => {
  //   return setNumber(number + 1);
  // }
  console.log(createStore(reducer));
  return (
    <Provider store={store}>
      <Box></Box>
    </Provider>
  );
}

export default App;
