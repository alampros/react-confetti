import React from 'react'
import { useWindowSize } from 'react-use'
import KnobbedConfetti from './KnobbedConfetti'

export default () => {
  const { width, height } = useWindowSize()
  if(!Number.isFinite(width) || !Number.isFinite(height)) return null
  return (
    <KnobbedConfetti
      width={width}
      height={height}
    />
  )
}
