import React from 'react'
import { useParams } from 'react-router-dom'
import Categories from './Categories';
import NewsItemList from './NewsItemList';

const NewsPage = () => {
  let {category} = useParams();
  console.log('category: ', category);
  if(!category){
    category = 'all';
  }
  
  return (
    <div>
      <Categories/>
      <NewsItemList category = {category}/>
    </div>
  )
}

export default NewsPage