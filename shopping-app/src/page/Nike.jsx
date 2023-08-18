import React from 'react'

const Nike = ({props}) => {
  const {id, title, imgUrl, content, price} = props
  return (
    <div key={id} className='col-md-4'>
      <img src={imgUrl} alt={title} width='80%'/>
      <h5>{title}</h5>
      <span>{content}</span>
      <p>{price}원</p>
    </div>
  )
}

export default Nike