import React from 'react'
import tourSpots from '../tourSpot.json'
import TourItem from './TourItem';
import './TourList.css'
import { useState } from 'react';
import { useRef } from 'react';

const TourList = ({ data }) => {
  const dataList = data;
  console.log('data: ', data);
  const [page, setPage] = useState(1);
  const offset = 10;
  const pageNum = (page - 1) * offset;
  const lastPage = useRef(1);
  lastPage.current = dataList.length / offset;
  const introStr = data[0].contentscd.label === '관광지' ? '내가 가본 제주는 어디까지일까? 수많은 제주의 아름다운 여행지를 취향에 맞게 선택해보자. 360여 개의 크고 작은 오름을 비롯하여 눈 돌리면 어디에서나 마주치는 한라산 그리고 푸른 바다…. 제주의 보석 같은 여행지가 여러분의 선택을 기다린다.' : ''

  const onSetPage = (e) => {
    e.preventDefault();
    setPage(parseInt(e.target.text));
  }

  const pagingNumMake = (page) => {
    console.log('page: ', page);
    let arr = [];
    for (let i = page < 6 ? 1 : 6 ;  page < 6 ? i <=5 : i<=lastPage.current; i++) {
      arr.push(<a className='pagingNumBtn' href='/' onClick={onSetPage}>{i}</a>)
    }
    // todo!! : 선택한 페이지 번호의 텍스트와 현재 페이지가 일치하면 bold가 주어진 스타일 주기
    // if()
    // for (let i = 0; i < lastPage.current; i++) {
    //   arr.push(<a className='pagingNumBtn' href='/' onClick={onSetPage}>{i + 1}</a>)
    // }
    return arr;
  }


  // console.log('copiedSpot: ', dataList);

  // setdataList(list => [...list, testSpot]);

  // console.log(abcj.alltag)
  // console.log(dataList);
  // console.log(tourSpot)

  return (
    <div className='tourSpot'>
      {/* 관광지 리스트 화면 헤더, 리스트, 그리드 형태 변경시에도 그대로 유지 */}
      <div className='list-head'>
        <h1>{data[0].contentscd.label}</h1>
        <hr />
        <span className='list-head-intro'>{introStr}</span>
      </div>
      <div className='list-content'>
        {/*todo - 버튼 선택시 list-content-listGrid와 list-content-Grid 변경, map삭제*/}
        <div className='list-contentList'>
          <ul className='list-contentList-ul'>
            {dataList.slice(pageNum, offset * page).map((item) => <TourItem spot={item} key={item.contentsid} />)}
          </ul>
          <div className='list-contentList-paging'>
            <button
              disabled={page === 1 && true}
              onClick={() => { setPage(1) }}>첫페이지
            </button>
            <button
              disabled={page === 1 && true}
              onClick={() => { setPage(page - 1) }}>이전 페이지
            </button>
            {pagingNumMake(page)}
            <button
              disabled={page === lastPage.current && true}
              onClick={() => { setPage(page + 1) }}>다음 페이지
            </button>
            <button
              disabled={page === lastPage.current && true}
              onClick={() => { setPage(lastPage.current) }}>마지막페이지
            </button>
          </div>
        </div>
        {/* 맵 영역,  */}
        <div className='list-content-map'>맵</div>
      </div>
    </div>
  )
}

export default TourList