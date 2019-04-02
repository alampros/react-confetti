import React from 'react'
import { storiesOf } from '@storybook/react'
import { randomInt } from '../src/utils'

import SizedConfetti from './SizedConfetti'

function drawSnowflake(ctx) {
  const numPoints = this.numPoints || (randomInt(3, 4) * 2)
  this.numPoints = numPoints
  const innerRadius = this.radius * 0.2
  const outerRadius = this.radius * 0.8
  ctx.beginPath()
  ctx.moveTo(0, 0 - outerRadius)

  for(let n = 1; n < numPoints * 2; n++) {
    const radius = n % 2 === 0 ? outerRadius : innerRadius
    const x = radius * Math.sin((n * Math.PI) / numPoints)
    const y = -1 * radius * Math.cos((n * Math.PI) / numPoints)
    ctx.lineTo(x, y)
  }
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

storiesOf('With Size Hook', module)
  .add('Snow', () => (
    <SizedConfetti
      drawShape={drawSnowflake}
      colors={['#AEE1FF', '#CBDDF8']}
      gravity={0.03}
      wind={0.01}
    />
  ))
