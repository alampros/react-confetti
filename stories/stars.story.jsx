import React from 'react'
import { storiesOf } from '@storybook/react'
import { randomInt } from '../src/utils'
import SizedConfetti from './SizedConfetti'

function drawStar(ctx) {
  const numPoints = this.numPoints || randomInt(4, 6)
  this.numPoints = numPoints
  const outerRadius = this.w
  const innerRadius = outerRadius / 2
  ctx.beginPath()
  ctx.moveTo(0, 0 - outerRadius)

  for(let n = 1; n < numPoints * 2; n++) {
    const radius = n % 2 === 0 ? outerRadius : innerRadius
    const x = radius * Math.sin((n * Math.PI) / numPoints)
    const y = -1 * radius * Math.cos((n * Math.PI) / numPoints)
    ctx.lineTo(x, y)
  }
  ctx.fill()
  ctx.closePath()
}

storiesOf('Props|Demos', module)
  .add('Stars', () => (
    <SizedConfetti
      drawShape={drawStar}
    />
  ))
