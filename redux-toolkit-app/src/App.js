import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import { up } from './components/counterSlice'
import Counter from './components/Counter';

// const counterSlice = createSlice({
//   name: 'counterSlice',
//   initialState:{value:0},
//   reducers:{
//     up: (state, action) => {
//       console.log('action: ', action);

//       state.value += action.payload
//     }
//   }
// })

// const store = configureStore({
//   reducer:{
//     counter: counterSlice.reducer
//   }
// })

// function reducer(state=initialState, action) {
//   if(action.type === 'up'){
//     return {
//       ...state,
//       value : state.value+action.step
//     }
//   }
//   return state;
// }
// const initialState = { value: 0 }
// const store = createStore(reducer);

// function Counter() {
//   const count = useSelector(state => {
//     console.log(state);
//     return state.counter.value
//   });
//   const dispatch = useDispatch();
//   return <div>
//     <button onClick={()=>
//       // dispatch({type:'counterSlice/up',step:2})
//       dispatch(up(2))
//       }>+</button> {count}
//     <button>-</button>
//   </div>
// }


function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
