import React from 'react'
import PropTypes from 'prop-types'
import useWindowSize from 'react-use/lib/useWindowSize'
import SizedConfetti from './SizedConfetti'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

const VelocityConfetti = (
  { numericX, initialVelocityX, initialVelocityXMin, initialVelocityXMax,
    numericY, initialVelocityY, initialVelocityYMin, initialVelocityYMax,
    ...passedProps }
) => {
  const { width, height } = useWindowSize()
  return (
    <SizedConfetti
      width={width}
      height={height}
      confettiSource={{
        w: 10,
        h: 10,
        x: width / 2,
        y: height / 2,
      }}
      initialVelocityX={numericX ? initialVelocityX : { min: initialVelocityXMin, max: initialVelocityXMax }}
      initialVelocityY={numericY ? initialVelocityY : { min: initialVelocityYMin, max: initialVelocityYMax }}
      {...passedProps}
    />
  )
}

VelocityConfetti.propTypes = {
  numericX: PropTypes.bool.isRequired,
  initialVelocityX: PropTypes.number.isRequired,
  initialVelocityXMin: PropTypes.number.isRequired,
  initialVelocityXMax: PropTypes.number.isRequired,
  numericY: PropTypes.bool.isRequired,
  initialVelocityY: PropTypes.number.isRequired,
  initialVelocityYMin: PropTypes.number.isRequired,
  initialVelocityYMax: PropTypes.number.isRequired,
}

storiesOf('Props|Demos', module)
  .addDecorator(withKnobs)
  .add('Initial Velocity Options', () => (
    <VelocityConfetti
      friction={1}
      run={boolean('Run', true)}
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
      opacity={number('Opacity', 100, {
        range: true,
        min: 0,
        max: 100,
        step: 1,
      }) / 100}
      numericX={boolean('Numeric Initial X', true, 'Initial Velocity')}
      numericY={boolean('Numeric Initial Y', true, 'Initial Velocity')}
      initialVelocityX={number('Initial X: Numeric', 2, {
        range: true,
        min: 0,
        max: 10,
        step: 0.1,
      }, 'Initial Velocity')}
      initialVelocityXMin={number('Initial X: Range Min', -2, {
        range: true,
        min: -20,
        max: 20,
        step: 0.1,
      }, 'Initial Velocity')}
      initialVelocityXMax={number('Initial X: Range Max', 2, {
        range: true,
        min: -20,
        max: 20,
        step: 0.1,
      }, 'Initial Velocity')}
      initialVelocityY={number('Initial Y: Numeric', 5, {
        range: true,
        min: 0,
        max: 20,
        step: 0.1,
      }, 'Initial Velocity')}
      initialVelocityYMin={number('Initial Y: Range Min', -5, {
        range: true,
        min: -20,
        max: 20,
        step: 0.1,
      }, 'Initial Velocity')}
      initialVelocityYMax={number('Initial Y: Range Max', 0, {
        range: true,
        min: -20,
        max: 20,
        step: 0.1,
      }, 'Initial Velocity')}
    />
  ), {
    notes: 'Uses a custom `confettiSource` option to emit confetti from a small source in the center of the canvas.',
  })
