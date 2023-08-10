import React from 'react'
import './Button.scss'
import classNames from 'classnames'

const Button = ({children, size, color, onClick, onMouseMove}) => {
  return (
      <button className={classNames('button',size,color)}
        onClick={onClick} onMouseMove={onMouseMove}>{children}</button>
  )
}
Button.defaultProps = {
  size:'medium',
  color:'blue'
}

export default Button