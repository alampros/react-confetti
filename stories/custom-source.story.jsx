import React from 'react'
import PropTypes from 'prop-types'
import useWindowSize from 'react-use/lib/useWindowSize'
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import SizedConfetti from './SizedConfetti'

const CustomSourceConfetti = ({ shape, x, y, w, h, side1X, side1Y, side2X, side2Y, ...passedProps }) => {
  const { width, height } = useWindowSize()
  return (
    <SizedConfetti
      width={width}
      height={height}
      confettiSource={shape === 'rectangle' ? {
        w: w / 100 * width,
        h: h / 100 * height,
        x: x / 100 * width,
        y: y / 100 * height,
      } : {
        x: x / 100 * width,
        y: y / 100 * height,
        side1: { x: side1X / 100 * width, y: side1Y / 100 * height },
        side2: { x: side2X / 100 * width, y: side2Y / 100 * height },
      }}
      {...passedProps}
    />
  )
}

CustomSourceConfetti.propTypes = {
  shape: PropTypes.oneOf(['rectangle' | 'parallelogram']).isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
  side1X: PropTypes.number.isRequired,
  side1Y: PropTypes.number.isRequired,
  side2X: PropTypes.number.isRequired,
  side2Y: PropTypes.number.isRequired,
}

storiesOf('Props|Demos', module)
  .addDecorator(withKnobs)
  .add('Custom Source', () => (
    <CustomSourceConfetti
      run={boolean('Run', true)}
      shape={select('Shape', { Parallelogram: 'parallelogram', Rectangle: 'rectangle' })}
      x={number('x (as % of screen width)', 50, { range: true, min: 0, max: 100, step: 1 })}
      y={number('y (as % of screen height)', 50, { range: true, min: 0, max: 100, step: 1 })}
      w={number('width (as % of screen width)', 0, { range: true, min: -100, max: 100, step: 1 }, 'rectangle')}
      h={number('height (as % of screen height)', 0, { range: true, min: -100, max: 100, step: 1 }, 'rectangle')}
      side1X={number('x-offset of side1 (as % of screen width)', 10, { range: true, min: -100, max: 100, step: 1 }, 'parallelogram')}
      side1Y={number('y-offset of side1 (as % of screen width)', 10, { range: true, min: -100, max: 100, step: 1 }, 'parallelogram')}
      side2X={number('x-offset of side2 (as % of screen width)', 10, { range: true, min: -100, max: 100, step: 1 }, 'parallelogram')}
      side2Y={number('y-offset of side2 (as % of screen width)', 10, { range: true, min: -100, max: 100, step: 1 }, 'parallelogram')}
      recycle={boolean('Recycle', true)}
      numberOfPieces={number('# Pieces', 200, {
        range: true,
        min: 0,
        max: 2000,
        step: 10,
      })}
      wind={number('Wind', 0, {
        range: true,
        min: -0.5,
        max: 0.5,
        step: 0.001,
      })}
      gravity={number('Gravity', 0.1, {
        range: true,
        min: -1,
        max: 1,
        step: 0.01,
      })}
      initialVelocityX={number('Initial X', 2, {
        range: true,
        min: 0,
        max: 10,
        step: 0.1,
      })}
      initialVelocityY={number('Initial Y', 5, {
        range: true,
        min: 0,
        max: 20,
        step: 0.1,
      })}
      opacity={number('Opacity', 100, {
        range: true,
        min: 0,
        max: 100,
        step: 1,
      }) / 100}
    />
  ), {})
