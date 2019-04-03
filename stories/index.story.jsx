import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import SizedConfetti from './SizedConfetti'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import ReactConfetti from '../src/ReactConfetti'

const PointConfetti = (passedProps) => {
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
      {...passedProps}
    />
  )
}

storiesOf('Props|Demos', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => (
    <SizedConfetti
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
    />
  ))
  .add('Custom Source', () => (
    <PointConfetti
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
    />
  ))

storiesOf('Props|Default', module)
  .addDecorator(withInfo)
  .add('Default', () => <ReactConfetti />)
