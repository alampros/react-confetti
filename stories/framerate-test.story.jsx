import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'
import FPSStats from 'react-fps-stats'

import SizedConfetti from './SizedConfetti'

storiesOf('Tests|Performance', module)
  .addDecorator(withKnobs)
  .add('Framerate', () => (
    <div>
      <SizedConfetti
        debug
        style={{ zIndex: 0 }}
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
        frameRate={number('Frame Rate', 30, {
          range: true,
          min: 1,
          max: 60,
          step: 1,
        })}
      />
      <FPSStats right={0} left="auto" />
    </div>
  ))
