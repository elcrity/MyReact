import { createStore } from 'redux'

const initialState = {
  counter: 0,
  text: '',
  list: []
};

//액션
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

function increase() {
  return {
    type: INCREASE
  }
}
const decrease = () => {
  return {
    type: DECREASE
  }
}
const changeText = text => ({
  type: CHANGE_TEXT,
  text
})
const addToList = item => ({
  type: ADD_TO_LIST,
  item
})

//리듀서
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        counter: state.counter+1
      }
    case 'DECREASE':
      return {
        ...state,
        counter: state.counter-1
      }
    case 'CHANGE_TEXT':
      return {
        ...state,
        text: action.text
      }
    case 'ADD_TO_LIST':
      return {
        ...state,
        list: state.list.push(action.item)
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
}

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('헬로 미스터 마이 예스터데이'));
store.dispatch(addToList({id:1, text:'Hello Mr.MyYesterday'}));