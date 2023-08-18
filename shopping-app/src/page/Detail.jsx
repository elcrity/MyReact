import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Nav } from 'react-bootstrap'
import Test from '../components/Test';

const Detail = ({ props }) => {

  let { id } = useParams();
  id = parseInt(id || 0);
  const { title, content, price, imgUrl } = props.find(item => id === item.id);
  // const { title, content, price, imgUrl} = props.filter(item => id === item.id)[0];

  const [tap, setTap] = useState(0);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={"../" + imgUrl} alt={title} width='95%' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{title}</h4>
          <p>{content}</p>
          <p>{price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link onClick={() => { setTap(0) }} eventKey='link0'>상품내역</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTap(1) }} eventKey='link1'>배송안내</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTap(2) }} eventKey='link2'>문의하기</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tap={tap}></TabContent>
    </div>
  )
}

function TabContent({tap}) {
  return [
    <div>내용0</div>, <div>내용1</div>, <div>내용3</div>][tap]
}

// function TabContent({tap}){
//   if(tap === 0) {
//     <div>내용0</div>
//   }...
// }

export default Detail