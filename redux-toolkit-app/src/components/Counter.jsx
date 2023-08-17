import { useSelector, useDispatch } from 'react-redux'
import { up } from './counterSlice';

function Counter() {
  const count = useSelector(state => {
    console.log(state);
    return state.counter.value
  });
  const dispatch = useDispatch();
  return <div>
    <button onClick={() =>
      // dispatch({type:'counterSlice/up',step:2})
      dispatch(up(2))
    }>+</button> {count}
    <button>-</button>
  </div>
}

export default Counter