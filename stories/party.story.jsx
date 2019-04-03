import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import ReactConfetti from '../src/ReactConfetti'
import './party.css'

const PartyMode = ({ children }) => {
  const [party, setParty] = useState(false)
  const handleClick = () => {
    setParty(!party)
  }
  return (
    <div className={'root' + (party ? ' party' : '')}>
      <ReactConfetti
        style={{ pointerEvents: 'none' }}
        numberOfPieces={party ? 500 : 0}
      />
      <div className="party-container">
        <button onClick={handleClick} className="party-button">
          Party
        </button>
      </div>
    </div>
  )
}

storiesOf('Props Demos', module)
  .add('Party', () => (
    <PartyMode />
  ))
