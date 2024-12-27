import { action } from '@storybook/addon-actions'
import type {} from '@storybook/react'

// biome-ignore lint/correctness/noUnusedImports: React needs to be in scope for JSX
import React, { useState } from 'react'

import SizedConfetti from './SizedConfetti'
import './party.css'

export const PartyMode = () => {
  const [party, setParty] = useState(false)
  const partyStartAction = action('letsGetThisPartyStarted')
  const confettiCompleteAction = action('onConfettiComplete')
  return (
    <div className={`root${party ? ' party' : ''}`}>
      <SizedConfetti
        style={{ pointerEvents: 'none' }}
        numberOfPieces={party ? 500 : 0}
        recycle={false}
        onConfettiComplete={(confetti: any) => {
          confettiCompleteAction(confetti)
          setParty(false)
          confetti.reset()
        }}
      />
      <div className="party-container">
        <button
          type="button"
          onClick={() => {
            partyStartAction()
            setParty(!party)
          }}
          className="party-button"
        >
          Party
        </button>
      </div>
    </div>
  )
}
