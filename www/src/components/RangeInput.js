import React from 'react'

export default (props) => {
  return (
    <input
      type="range"
      step={1}
      min={0}
      max={100}
      {...props}
    />
  )
}
