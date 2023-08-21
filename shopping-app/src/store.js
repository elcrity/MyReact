import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'user',
  initialState: {
    name: 'bob',
    age: '22'
  },
  reducers: {
    changeName(state) {
      state.name = 'pop'
    },
    increase(state, action) {
      state.age += action.payload
    }
  }
})

export let { changeName, increase } =user.actions

const cart = createSlice({
  name: 'cart',
  initialState: [
    {
      id: 0,
      title: "White and Black",
      imgUrl: "img/shoes1.jpg",
      count: 2
    },
    {
      id: 1,
      title: "Red Knit",
      imgUrl: "img/shoes2.jpg",
      count: 1
    },
    {
      id: 2,
      title: "Grey Yordan",
      imgUrl: "img/shoes3.jpg",
      count: 1
    }
  ],
  reducers: {
    addCount(state, action) {
      const num = state.findIndex((a) => {
        return a.id === action.payload.id;;
      });
      console.log(num);
      state[num].count++;
    },
    decreaseCount(state, action) {
      const num = state.findIndex((a) => {
        return a.id === action.payload.id;
      });
      if (state[num].count > 0) state[num].count--;
      else if (state[num] === 0) alert('카트에 담긴 상품의 수량이 0개입니다.')
    },
    removeItem(state, action) {
      let num = state.findIndex((a)=>{
        return a.id === action.payload.id;
      });
      state.splice(num,1);
    },
    addItem(state, action){
      let num = state.findIndex((a)=>{
        return a.id === action.payload.id;
      })
      if(num !== -1){
        state[num].count++
      }else{
        state.push(action.payload)
      }
    },
    sortName(state,action){
      state.sort((a,b)=>(
        (a.name > b.name ? 1 : -1)
      ))
    }
  }
})


export let { addCount, decreaseCount, addItem, removeItem, sortName} = cart.actions

export default configureStore({
  reducer:{
    user : user.reducer,
    cart: cart.reducer
  }
})