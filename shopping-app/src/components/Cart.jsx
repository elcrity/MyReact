import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import { addCount,decreaseCount, removeItem } from '../store'

const Cart = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch();
  console.log('state: ', state.cart[0].name);

  return (
    <div>
      <h5>{state.user.name} {state.user.age}</h5>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>이미지</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((a, i) =>
              <tr key={i}>
                <td>{state.cart[i].id +1}</td>
                <td>{<img src={state.cart[i].imgUrl} alt={state.cart[i].id} width='50%' />}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td><Button onClick={()=>{
                  dispatch(addCount(state.cart[i].id))
                }}>+</Button>
                <Button onClick={()=>{
                  dispatch(decreaseCount(state.cart[i].id))
                }}>-</Button>
                <Button onClick={()=>{
                  dispatch(removeItem(state.cart[i].id))
                }}>삭제</Button></td>
              </tr>)
          }
        </tbody>
      </Table>
    </div>


  )
}

export default Cart