import React, { useCallback, useEffect } from 'react'
import TourItem from './TourItem';
import './TourList.scss'
import { useState } from 'react';
import { useRef } from 'react';
import ListPaging from './ListPaging';
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

const TourList = ({ data,path }) => {
  const rawData = data;
  const [tagFilter, setTagFilter] = useState('');
  const nav = useNavigate();
  const location = useLocation();
  console.log('location: ', location);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageType = searchParams.get('type');
  //param grid일때 list일때 css 변경


  const onNav = () =>{
    nav(('/grid'))
  }
  //받아오는 데이터
  
  
  // console.log('rawData: ', rawData);

  //태그 변화시 데이터 변경
  
  const dataList = rawData.filter(item => item.tag.includes(tagFilter));
  // console.log('dataList: ', dataList.length);

  //페이징용 변수
  const [page, setPage] = useState(1);
  const offset = 10;
  const pageNum = (page - 1) * offset;
  const lastPage = useRef(1);
  lastPage.current = Math.floor(dataList.length % offset > 0 ? (dataList.length / offset) + 1 : dataList.length / offset);

  //태그용 변수
  let tagList = []
  rawData.map((item) => {
    tagList = tagList.concat(item.tag.replace(/, /gi, ',').split(','));
  })

  //토글용
  const [btn, setBtn] = useState([]);

  useEffect(()=>{
    setTagFilter('');
    setPage(1)
    setBtn([]);
  },[data])

  const focusHandler = (e,i) => {
    console.log(e.target.id)
    setBtn((prevBtn) =>{
      if(prevBtn.includes(i)){
        return prevBtn.filter(btnIdx => btnIdx !== i)
      }
      else{
        return [i]
      }
    });
    if (e.target.id === i)
      setBtn('');
  }

  const clickFilter = (e) => {
    if (e.target.value !== tagFilter) setTagFilter(e.target.value);
    else setTagFilter('');
  }

  const tagBtn = useCallback(() => {
    const btnList = []
    const num = 4;
    let tagSet = [...new Set(tagList)];
    console.log('tagSet: ', tagSet);
    for (let i = 0; i < 40; i += num) {
      btnList.push(<button id={i/num} className={`tagBtn ${btn.includes(i/num) ? 'Focused' : ''}`} value={tagSet[i]}
        onClick={(e) => {
          clickFilter(e);
          focusHandler(e,i/num);
        }} >#{tagSet[i]}</button>)
    }
    return btnList
  }, [tagList])


  return (
    <div className={pageType}>
      {/* 관광지 리스트 화면 헤더, 리스트, 그리드 형태 변경시에도 그대로 유지 */}
      <div className={`${pageType}-head`}>
        <h1>{data[0].contentscd.label}</h1>
        <hr />
        <p className={`${pageType}-head-intro`}>{data[0].contentscd.label === '관광지' ?
          '내가 가본 제주는 어디까지일까? 수많은 제주의 아름다운 여행지를 취향에 맞게 선택해보자. 360여 개의 크고 작은 오름을 비롯하여 눈 돌리면 어디에서나 마주치는 한라산 그리고 푸른 바다…. 제주의 보석 같은 여행지가 여러분의 선택을 기다린다.'
          : ''}</p>
        {/* {rawData.map((item) => item.tag.map(tag => (<button key={tag} value={tag} onClick={clickFilter}>#{tag}</button>)))} */}
        {tagBtn()}
        <br />
        <button onClick={()=>{nav('/test1/1?type=list')}}>리스트</button>
        <button onClick={()=>{nav('/test1/1?type=grid')}}>그리드</button>
      </div>
      <div className={`${pageType}-content`}>
        {/*todo - 버튼 선택시 list-content-listGrid와 list-content-Grid 변경, map삭제*/}
        <div className={`${pageType}-contentList`}>
          <ul className={`${pageType}-contentList-ul`}>
            {
              dataList.slice(pageNum, offset * page).map((item) => {
                if (item.tag.includes(tagFilter)) {
                  return <TourItem spot={item} key={item.contentsid} />
                }
              })}
          </ul>
          <ListPaging page={page} setPage={setPage} lastPage={lastPage}></ListPaging>
        </div>
        {/* 맵 영역,  */}
        <div className={`${pageType}-content-map`}>맵</div>
      </div>
    </div>
  )
}

export default TourList