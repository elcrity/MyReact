import React from 'react'
import  { ColorConsumer } from './Contexts/Color'

const ColorBox = () => {
  return (
    // <ColorContext.Consumer>{value => {
    //   return (
    //     <div style={{ width: '64px', height: '64px', background: value.color }}></div>
    //     )
    // }}</ColorContext.Consumer>
    <ColorConsumer>
    {({state}) => 
      <div>
        <div style={{ width: ' 96px', height: ' 96px', background: state.color }}></div>
        <div style={{ width: ' 96px', height: ' 96px', background: state.subColor }}></div>
      </div>
    }
    </ColorConsumer>
  )
}

export default ColorBox