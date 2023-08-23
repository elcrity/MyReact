import React, { useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const DetailInfo = () => {
  const location = useLocation();

  const review = useRef([{
    id: 'test1',
    content: '대충 잘 갔다옴',
    img: '대충 이미지 url',
    date: '대충 현재 날짜 넣기',
    score: 5
  }]);

  const img = location.state.img;
  const tag = location.state.tag;
  const address = location.state.address;
  const phoneno = location.state.phoneno;
  const title = location.state.title;
  return (
    <div className='detail'>
      <div className='detail-header'>
        {<img src={`${img}`} alt={`${title}`}></img>}
        <div className='detail-headerInfo'>
          <h1>{title}</h1>
          <p>{tag.split(', ').map(tag => ('#' + tag + ' '))}</p>
          <p>주소 : {address}</p>
          <p>{phoneno !== '--' || null ? '연락처 : ' + phoneno : ''}</p>
        </div>

      </div>
      <div className='detail-content'>
        <div className='detail-contentInfo'>
          <div>상세정보 탭</div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, fugiat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque sint sed, quisquam recusandae laborum.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat, odit, repellendus blanditiis magni aut iste dolorem, optio quas at saepe quos rem corporis itaque facere nobis provident perferendis. Totam?</p>
          </div>
        </div>
        <div className='detail-contentPhoto'>
          <div>사진 탭</div>
          <div>사진</div>
        </div>
        <div className='detail-contentReview'>
          <div>리뷰 탭</div>
          <div>리뷰</div>
        </div>
      </div>
    </div>
  )
}

export default DetailInfo