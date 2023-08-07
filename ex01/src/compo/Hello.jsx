import React from 'react'
import PropTypes from 'prop-types'

const Hello = props => {
  const {color, name, favoriteNumber} = props;
  return (
    <div style = {{color}}>
      <h1>헬로 {name}</h1>
      <h2>가장 좋아하는 숫자는 {favoriteNumber}</h2>
    </div>
  )
}
Hello.defaultProps = {
  name : '이름없음'
}
Hello.propTypes = {
  name: PropTypes.string,
  favoriteNumber : PropTypes.number.isRequired
}

export default Hello