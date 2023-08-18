import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    products.map((a,i) => {return <Item product={products[i]} key={products[i].key}></Item>})
    // products.map(item => <Item product={item} ></Item>)
  )
}

export default ItemList