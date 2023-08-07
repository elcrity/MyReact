import React, { useState } from 'react'

const EventHandling = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleClick = ()=>{
    console.log(isToggleOn);
    setIsToggleOn(!isToggleOn);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {isToggleOn ? "ON" : "OFF"}
      </button>
    </div>
  )
}

export default EventHandling