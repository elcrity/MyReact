import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import { addCount, decreaseCount, removeItem , sortName} from '../store'

const Cart = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch();
  // console.log('state: ', state.cart[0].title);

  return (
    <div>
      <h5 className='p-5'>{state.user.name} {state.user.age}</h5>
      <Table>
        <thead>
          <tr className='text-center'>
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
              <tr key={i} className='align-middle'>
                <td>{state.cart[i].id + 1}</td>
                <td>{<img src={state.cart[i].imgUrl} alt={state.cart[i].id} width='200px' />}</td>
                <td>{state.cart[i].title}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <Button onClick={() => {
                    dispatch(addCount(state.cart[i].id))
                  }} variant='outline-success'>+</Button>
                  <Button onClick={() => {
                    dispatch(decreaseCount(state.cart[i].id))
                  }} variant='outline-warning'>-</Button>
                  <Button onClick={() => {
                    dispatch(removeItem(state.cart[i].id))
                  }}>삭제</Button>
                </td>
              </tr>
              )}
        </tbody>
      </Table>
      <Button variant='outline-primary' onClick={() => dispatch(sortName(state.cart.title))}>이름순 정렬</Button>
    </div>


  )
}

export default Cart