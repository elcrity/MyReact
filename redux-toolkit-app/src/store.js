import {configureStore} from '@reduxjs/toolkit'
import  counterSlice  from './components/counterSlice'

const store = configureStore({
  reducer:{
    counter: counterSlice.reducer
  }
})

export default store