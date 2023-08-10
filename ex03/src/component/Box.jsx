import React, {useEffect, useRef, useState } from 'react'

const Box = ({boxStyle}) => {
  const [style, setStyle] = useState();
  const countRender = useRef(0);

  useEffect(()=>{
    countRender.current += 1;
    console.log('박스사이즈 함수가 생성되었습니다', countRender);
    setStyle(boxStyle)
  },[boxStyle]);

  return (
    <div>
      <div style={style}></div>
    </div>
  )
}

export default Box