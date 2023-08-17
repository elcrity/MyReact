import React, { useState } from 'react'
import NewsItem from './NewsItem'
import './NewsItemList.css'
import axios from 'axios'
import usePromise from '../lib/usePromise'

const NewsList = ({ category }) => {

  const [size, setSize] = useState(10);
  const [loading, response, error] = usePromise(() => {
    const url = 'https://dapi.kakao.com/v3/search/book';
    const sendQuery = '&query=' + category;
    const sendSize = '&size=' + size;
    // const cate = category === 'all' ? '' : '&category=' + category;
    const key = { headers: 'Authorization: KakaoAK 9360a628703fcb5124e5b4de4974792b' };
    console.log(url + sendQuery + sendSize)
    // return axios.get(url + sendQuery + sendSize, key)
    return axios.get(url, {
      params:
      {
        query: category,
        // sort: 'accuracy', // accuracy | recency 정확도 or 최신
        // page: 1, // 페이지번호
        // size: 10, // 한 페이지에 보여 질 문서의 개수
        target:'title'
      },
      method: "GET",
      headers:{ Authorization: 'KakaoAK 9360a628703fcb5124e5b4de4974792b'}
    })
  }, [category]);
  // console.log(response)
  if (loading === true) {
    return <div>로딩중</div>
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <div className='newsListBlock'>에러!</div>
  }

  // if(error){
  //   console.log('error: ', error);
  //   return <div className='newsListBlock'>에러!</div>
  // }
  const { documents } = response.data;
  console.log('documents: ', documents);

  return (
    <div className='newsListBlock'>
      {documents.map(book => (
        <NewsItem key={book.isbn} book={book}></NewsItem>
      ))}
    </div>
  )
}

export default NewsList