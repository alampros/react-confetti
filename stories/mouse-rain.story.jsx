import React, { useRef, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import useMouse from 'react-use/lib/useMouse'
import SizedConfetti from './SizedConfetti'

const MouseRain = () => {
  const ref = useRef(null)
  const { docX } = useMouse(ref)
  const activeProps = docX ? {
    confettiSource: {
      w: 0,
      h: 0,
      x: docX,
      y: 0,
    },
  } : {
    run: false,
  }
  return (
    <>
      <p style={{ textAlign: 'center', fontFamily: 'sans-serif', color: '#999', margin: '20%' }}>Move your mouse</p>
      <SizedConfetti
        style={{ pointerEvents: 'none' }}
        numberOfPieces={100}
        initialVelocityX={2}
        initialVelocityY={5}
        ref={ref}
        gravity={0.5}
        {...activeProps}
      />
    </>
  )
}

storiesOf('Props|Demos', module)
  .add('Mouse Rain', () => (
    <MouseRain />
  ), {
    notes: 'Illustrates how to manipulating the `confettiSource` `Rect`.',
  })
