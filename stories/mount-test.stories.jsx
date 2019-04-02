import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

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
    <Toggler>
      <ReactConfetti style={{ zIndex: 0 }} />
    </Toggler>
  ))
