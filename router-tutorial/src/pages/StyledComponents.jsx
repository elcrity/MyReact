import React from 'react'
import styled from 'styled-components'

const SimpleBtn = styled.button`
  Color:white;
  background:green;
`;
const LargeBtn = styled(SimpleBtn)`
  font-size:50px;
`;

const ReactBtn = props =>{
  return(
    <button className={props.className}>{props.children}</button>
    // 클래스네임을 주지 props로 넘겨주지 않으면 상속해서 사용 불가
  )
}

const ReactLargeBtn = styled(ReactBtn)`
  font-size:50px;
`;

const PrimaryBtn = styled.button`
  color : ${props => props.$primary ? 'blue' : 'red'};
  background : ${props => props.$primary ? 'white' : 'gray'}
  
`;



const StyledComponents = () => {
  return (
    <div>
      <SimpleBtn>심플</SimpleBtn>
      <LargeBtn>라지</LargeBtn>
      <ReactBtn>리액트</ReactBtn>
      <ReactLargeBtn>라지리액트</ReactLargeBtn>
      <PrimaryBtn>노말</PrimaryBtn>
      <PrimaryBtn $primary>프라이머리</PrimaryBtn>
    </div>
  )
}

export default StyledComponents