import React from 'react'
import Button from '../components/Button'
import '../components/Button.scss'

const ScssBtn = ({size, color}) => {
  return (
    <div className='buttonWrapper'>
      <div className="buttons">
        <Button size="large" onClick={()=>{console.log('클릭!')}}>BUTTON</Button>
        <Button onMouseMove={()=>{console.log('휘릭')}}>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="red">
          BUTTON
        </Button>
        <Button color="red">BUTTON</Button>
        <Button size="small" color="red">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="orange">
          BUTTON
        </Button>
        <Button color="orange">BUTTON</Button>
        <Button size="small" color="orange">
          BUTTON
        </Button>
      </div>
    </div>
  )
}

export default ScssBtn