import React from 'react'
import ItemList from '../components/ItemList'
import {Title , Title2} from './Title';
import Button from 'react-bootstrap/Button';
import data from '../sampleData';

const Main = ({props, setData}) => {
  return (
    <div>
      <div className='slider'></div>
      <Title/>
      <Title2/>
      <Button variant='outline-primary btn' onClick={()=>{
        let data1 = [...data].sort((a,b)=>
          a.title > b.title ? 1: -1)
          setData(data1);
          console.log(data1);
      }}>이름순 정렬</Button>
      <Button variant='outline-secondary btn' onClick={()=>{
        let data1 = [...data].sort((a,b)=>
          a.price > b.price ? 1: -1)
          setData(data1);
      }}>낮은 가격순 정렬</Button>
      <Button variant='outline-success btn' onClick={()=>{
        let data1 = [...data].sort((a,b)=>
          a.price < b.price ? 1: -1)
          setData(data1);
      }}>높은 가격 순 정렬</Button>

      <div className='container'>
        <div className='row'>
          <ItemList products={props}/>
        </div>
      </div>
    </div>
  )
}

export default Main