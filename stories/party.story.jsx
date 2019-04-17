import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import SizedConfetti from './SizedConfetti'
import './party.css'

const confettiCompleteAction = action('Confetti Complete')

const PartyMode = () => {
  const [party, setParty] = useState(false)
  return (
    <div className={'root' + (party ? ' party' : '')}>
      <SizedConfetti
        style={{ pointerEvents: 'none' }}
        numberOfPieces={party ? 500 : 0}
        recycle={false}
        onConfettiComplete={confetti => {
          confettiCompleteAction()
          setParty(false)
          confetti.reset()
        }}
      />
      <div className="party-container">
        <button
          onClick={() => setParty(!party)}
          className="party-button"
          autoFocus
        >
          Party
        </button>
      </div>
    </div>
  )
}

storiesOf('Props|Demos', module)
  .add('Party', () => (
    <PartyMode />
  ), {
    notes: 'Illustrates how manipulating the `numberOfPieces` can be used with a boolean state variable, as well as the `onConfettiComplete` event to reset the particle generator when `recycle` is false.',
  })
