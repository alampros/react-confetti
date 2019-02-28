import React from 'react'
import { useWindowSize } from 'react-use'
import KnobbedConfetti from './KnobbedConfetti'

export default () => {
  const { width, height } = useWindowSize()
  if(!Number.isFinite(width) || !Number.isFinite(height)) return null
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'
    }}
    >
      <KnobbedConfetti
        width={width}
        height={height}
      />
    </div>
  )
}
