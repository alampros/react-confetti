import React from 'react'
import PropTypes from 'prop-types'
import useWindowSize from 'react-use/lib/useWindowSize'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import SizedConfetti from './SizedConfetti'
import { Circle } from '../src/Shapes/Circle'
import { Parallelogram } from '../src/Shapes/Parallelogram'
import { Triangle } from '../src/Shapes/Triangle'
import { Sector } from '../src/Shapes/Sector'

const RectangleConfetti = ({ x, y, w, h, ...passedProps }) => {
  const { width, height } = useWindowSize()
  return (
    <SizedConfetti
      width={width}
      height={height}
      confettiSource={{
        w: w / 100 * width,
        h: h / 100 * height,
        x: x / 100 * width,
        y: y / 100 * height,
      }}
      {...passedProps}
    />
  )
}

RectangleConfetti.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
}

const ParallelogramConfetti = ({ x, y, side1X, side1Y, side2X, side2Y, ...passedProps }) => {
  const { width, height } = useWindowSize()
  return (
    <SizedConfetti
      width={width}
      height={height}
      confettiSource={new Parallelogram(
        {
          x: x / 100 * width,
          y: y / 100 * height,
        }, {
          x: side1X / 100 * width,
          y: side1Y / 100 * height,
        }, {
          x: side2X / 100 * width,
          y: side2Y / 100 * height,
        })}
      {...passedProps}
    />
  )
}

ParallelogramConfetti.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  side1X: PropTypes.number.isRequired,
  side1Y: PropTypes.number.isRequired,
  side2X: PropTypes.number.isRequired,
  side2Y: PropTypes.number.isRequired,
}

const TriangleConfetti = ({ x, y, side1X, side1Y, side2X, side2Y, ...passedProps }) => {
  const { width, height } = useWindowSize()
  return (
    <SizedConfetti
      width={width}
      height={height}
      confettiSource={new Triangle(
        {
          x: x / 100 * width,
          y: y / 100 * height,
        }, {
          x: side1X / 100 * width,
          y: side1Y / 100 * height,
        }, {
          x: side2X / 100 * width,
          y: side2Y / 100 * height,
        })}
      {...passedProps}
    />
  )
}

TriangleConfetti.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  side1X: PropTypes.number.isRequired,
  side1Y: PropTypes.number.isRequired,
  side2X: PropTypes.number.isRequired,
  side2Y: PropTypes.number.isRequired,
}

const CircleConfetti = ({ x, y, radius, ...passedProps }) => {
  const { width, height } = useWindowSize()
  return (
    <SizedConfetti
      width={width}
      height={height}
      confettiSource={new Circle(
        {
          x: x / 100 * width,
          y: y / 100 * height,
          radius: radius / 100 * width,
        })}
      {...passedProps}
    />
  )
}

CircleConfetti.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
}

const SectorConfetti = ({ x, y, radius, angle1, angle2, ...passedProps }) => {
  const { width, height } = useWindowSize()
  return (
    <SizedConfetti
      width={width}
      height={height}
      confettiSource={new Sector(
        {
          x: x / 100 * width,
          y: y / 100 * height,
        },
        radius / 100 * width,
        angle1 / 360 * 2 * Math.PI,
        angle2 / 360 * 2 * Math.PI
      )}
      {...passedProps}
    />
  )
}

SectorConfetti.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  angle1: PropTypes.number.isRequired,
  angle2: PropTypes.number.isRequired,
}

storiesOf('Props|Demos', module)
  .addDecorator(withKnobs)
  .add('Custom Source - Rectangle', () => (
    <RectangleConfetti
      run={boolean('Run', true)}
      x={number('x (as % of screen width)', 50, { range: true, min: 0, max: 100, step: 1 })}
      y={number('y (as % of screen height)', 50, { range: true, min: 0, max: 100, step: 1 })}
      w={number('width (as % of screen width)', 0, { range: true, min: -100, max: 100, step: 1 })}
      h={number('height (as % of screen height)', 0, { range: true, min: -100, max: 100, step: 1 })}
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
  .add('Custom Source - Parallelogram', () => (
    <ParallelogramConfetti
      run={boolean('Run', true)}
      x={number('x (as % of screen width)', 50, { range: true, min: 0, max: 100, step: 1 })}
      y={number('y (as % of screen height)', 50, { range: true, min: 0, max: 100, step: 1 })}
      side1X={number('x-offset of side1 (as % of screen width)', 0, { range: true, min: -100, max: 100, step: 1 })}
      side1Y={number('y-offset of side1 (as % of screen width)', 0, { range: true, min: -100, max: 100, step: 1 })}
      side2X={number('x-offset of side2 (as % of screen width)', 0, { range: true, min: -100, max: 100, step: 1 })}
      side2Y={number('y-offset of side2 (as % of screen width)', 0, { range: true, min: -100, max: 100, step: 1 })}
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
  .add('Custom Source - Triangle', () => (
    <TriangleConfetti
      run={boolean('Run', true)}
      x={number('x (as % of screen width)', 50, { range: true, min: 0, max: 100, step: 1 })}
      y={number('y (as % of screen height)', 50, { range: true, min: 0, max: 100, step: 1 })}
      side1X={number('x-offset of side1 (as % of screen width)', 0, { range: true, min: -100, max: 100, step: 1 })}
      side1Y={number('y-offset of side1 (as % of screen width)', 0, { range: true, min: -100, max: 100, step: 1 })}
      side2X={number('x-offset of side2 (as % of screen width)', 0, { range: true, min: -100, max: 100, step: 1 })}
      side2Y={number('y-offset of side2 (as % of screen width)', 0, { range: true, min: -100, max: 100, step: 1 })}
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
  .add('Custom Source - Circle', () => (
    <CircleConfetti
      run={boolean('Run', true)}
      x={number('center of circle\'s x position (as % of screen width)', 50, { range: true, min: 0, max: 100, step: 1 })}
      y={number('center of circle\'s y position (as % of screen height)', 50, { range: true, min: 0, max: 100, step: 1 })}
      radius={number('radius (as % of screen width)', 0, { range: true, min: 0, max: 100, step: 1 })}
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
  .add('Custom Source - Sector', () => (
    <SectorConfetti
      run={boolean('Run', true)}
      x={number('center of circle\'s x position (as % of screen width)', 50, { range: true, min: 0, max: 100, step: 1 })}
      y={number('center of circle\'s y position (as % of screen height)', 50, { range: true, min: 0, max: 100, step: 1 })}
      radius={number('radius (as % of screen width)', 0, { range: true, min: 0, max: 100, step: 1 })}
      // I prefer radians, but it's tricky to get those to work with the knobs. :P
      angle1={number('angle1 (in degrees)', 0, { range: true, min: -360, max: 360, step: 1 })}
      angle2={number('angle2 (in degrees)', 0, { range: true, min: -360, max: 360, step: 1 })}
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
