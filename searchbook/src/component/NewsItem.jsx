import React from 'react'
import './NewsItem.css'

const NewsItem = ({ book }) => {
  let { title, contents, url, thumbnail } = book;
  thumbnail = thumbnail || 'https://image-placeholder.com/images/actual-size/150x112.png'
  return (
    <div className='newsItemBlock'>
      <div className='thumbnail'>
        <a href={url}>
          <img src={thumbnail} alt="thumbnail" />
        </a>
      </div>
      <div className='contents'>
        <a href={url}>
          <h2>{title}</h2>
        </a>
        <p>{contents}</p>
      </div>
    </div>
  )
}

export default NewsItem