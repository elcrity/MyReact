import React from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Item = ({ product }) => {
  const navigate = useNavigate();
  const { title, content, imgUrl, id,price } = product

  return (
    <div className='col-md-4' key={id}>
      <Nav.Link onClick={()=>navigate('/detail/' + id)} className='c1'>
        <img src={imgUrl} alt={title} />
        <h4>{title}</h4>
        <p>{content}</p>
        <p>{price}원</p>
        <p>{id}</p>
      </Nav.Link>
    </div>
  )
}

export default Item