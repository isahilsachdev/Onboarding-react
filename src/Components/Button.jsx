import React from 'react'

const Button = ({ heading, onClick }) => {
  return (
    <button onClick={onClick}>
      {heading}
    </button>
  )
}

export default Button