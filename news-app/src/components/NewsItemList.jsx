import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import './NewsItemList.css'
import axios from 'axios'
import usePromise from '../lib/usePromise'

const NewsItemList = ({ category }) => {

  const [loading, response, error] = usePromise(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=kr';
    const query = category === 'all' ? '' : '&category=' + category;
    const apiKey = '&apiKey=f342a140fb074a19baa32bbe44756b9d';
    return axios.get(url + query + apiKey)
  }, [category]);

  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const article = useContext(articles);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const url = 'https://newsapi.org/v2/top-headlines?country=kr';
  //       const query = category === 'all' ? '' : '&category=' + category;
  //       const apiKey = '&apiKey=f342a140fb074a19baa32bbe44756b9d';
  //       const response = await axios.get(url+query+apiKey)
  //       console.log(url+query+apiKey);
  //       setArticles(response.data.articles);
  //     } catch (e) {
  //       console.log(e)
  //     }
  //     setLoading(false);
  //   }
  //   fetchData();
  // }, [category]);
  // })
  
 
if (loading) {
  return <div className='loading'>Loading....</div>
}
if (!response) {
  return null;
}
if(error){
  return <div className='newsListBlock'>에러!</div>
}

const {articles} = response.data;
return (
  <div className='newsListBlock'>
    {articles.map(article => (
      <NewsItem key={article.url} article={article}></NewsItem>
    ))}
    {/* 
      <NewsItem article={sample}></NewsItem>
      <NewsItem article={sample}></NewsItem> */}
  </div>
)
}

export default NewsItemList