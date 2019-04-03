import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'
import FPSStats from 'react-fps-stats'

import SizedConfetti from './SizedConfetti'
import ReactConfetti from '../src/ReactConfetti'

const Toggler = ({ children }) => {
  const [isVisible, setVisible] = useState(true)
  const handleClick = () => {
    setVisible(!isVisible)
  }
  return (
    <div>
      {isVisible && children}
      <div style={{ position: 'absolute', top: 10, left: 10 }}>
        <button onClick={handleClick}>
          Toggle
        </button>
        <aside style={{ marginTop: '2rem' }}>
          This is just to test that the confetti is cleaned up properly when the component is unmounted.
        </aside>
      </div>
    </div>
  )
}

storiesOf('Tests', module)
  .add('Cleanup on mount', () => (
    <div>
      <Toggler>
        <ReactConfetti style={{ zIndex: 0 }} />
      </Toggler>
    </div>
  ))
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
      />
      <FPSStats right={0} left="auto" />
    </div>
  ))
