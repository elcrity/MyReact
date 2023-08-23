import React, { useState } from 'react'

export const Storage = (props) => {
  const [data,setData] = useState([]);
  setData(props)
  console.log('data2: ', data);
  return data
}
