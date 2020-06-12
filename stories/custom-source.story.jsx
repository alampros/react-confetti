import React from 'react'
import PropTypes from 'prop-types'
import useWindowSize from 'react-use/lib/useWindowSize'
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import SizedConfetti from './SizedConfetti'

const CustomSourceConfetti = ({ shape, x, y, w, h, pointAX, pointAY, pointBX, pointBY, pointCX, pointCY, ...passedProps }) => {
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
        pointA: { x: pointAX / 100 * width, y: pointAY / 100 * height },
        pointB: { x: pointBX / 100 * width, y: pointBY / 100 * height },
        pointC: { x: pointCX / 100 * width, y: pointCY / 100 * height },
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
  pointAX: PropTypes.number.isRequired,
  pointAY: PropTypes.number.isRequired,
  pointBX: PropTypes.number.isRequired,
  pointBY: PropTypes.number.isRequired,
  pointCX: PropTypes.number.isRequired,
  pointCY: PropTypes.number.isRequired,
}

storiesOf('Props|Demos', module)
  .addDecorator(withKnobs)
  .add('Custom Source', () => (
    <CustomSourceConfetti
      run={boolean('Run', true)}
      shape={select('Shape', { Parallelogram: 'parallelogram', Rectangle: 'rectangle' }, 'rectangle')}
      x={number('x (as % of screen width)', 50, { range: true, min: 0, max: 100, step: 1 }, 'rectangle')}
      y={number('y (as % of screen height)', 50, { range: true, min: 0, max: 100, step: 1 }, 'rectangle')}
      w={number('width (as % of screen width)', 0, { range: true, min: -100, max: 100, step: 1 }, 'rectangle')}
      h={number('height (as % of screen height)', 0, { range: true, min: -100, max: 100, step: 1 }, 'rectangle')}
      pointAX={number('x-coordinate of pointA (as % of screen width)', 50, { range: true, min: 0, max: 100, step: 1 }, 'parallelogram')}
      pointAY={number('y-coordinate of pointA (as % of screen width)', 50, { range: true, min: 0, max: 100, step: 1 }, 'parallelogram')}
      pointBX={number('x-coordinate of pointB (as % of screen width)', 50, { range: true, min: 0, max: 100, step: 1 }, 'parallelogram')}
      pointBY={number('y-coordinate of pointB (as % of screen width)', 50, { range: true, min: 0, max: 100, step: 1 }, 'parallelogram')}
      pointCX={number('x-coordinate of pointC (as % of screen width)', 50, { range: true, min: 0, max: 100, step: 1 }, 'parallelogram')}
      pointCY={number('y-coordinate of pointC (as % of screen width)', 50, { range: true, min: 0, max: 100, step: 1 }, 'parallelogram')}
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
