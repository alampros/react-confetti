import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import SizedConfetti from './SizedConfetti'
import './party.css'

const PartyMode = ({ children }) => {
  const [party, setParty] = useState(false)
  const handleClick = () => {
    setParty(!party)
  }
  return (
    <div className={'root' + (party ? ' party' : '')}>
      <SizedConfetti
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
