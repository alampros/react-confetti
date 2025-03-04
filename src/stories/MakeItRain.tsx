import { action } from '@storybook/addon-actions'
import type {} from '@storybook/react'

// biome-ignore lint/correctness/noUnusedImports: React needs to be in scope for JSX
import React, { useState } from 'react'

import SizedConfetti from './SizedConfetti'
import './party.css'

export const MakeItRain = () => {
  const [party, setParty] = useState(false)
  const partyStartAction = action('letsGetThisPartyStarted')
  const confettiCompleteAction = action('onConfettiComplete')
  return (
    <div className={`root${party ? ' party' : ''}`}>
      <SizedConfetti
        style={{ pointerEvents: 'none' }}
        numberOfPieces={party ? 200 : 0}
        recycle={false}
        tweenDuration={1000}
        onConfettiComplete={(confetti: any) => {
          confettiCompleteAction(confetti)
          setParty(false)
          confetti.reset()
        }}
        initialVelocityY={-10}
        drawShape={function DrawMoney(
          this: any,
          ctx: CanvasRenderingContext2D,
        ) {
          const w = 40
          const h = w * 0.42508143
          const curveHeight = h / 3
          // draw a rectangle curved in the middle
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.quadraticCurveTo(w / 2, curveHeight, w, 0)
          ctx.lineTo(w, h)
          ctx.quadraticCurveTo(w / 2, h + curveHeight, 0, h)
          ctx.lineTo(0, 0)
          ctx.fillStyle = 'green'
          ctx.fill()
          ctx.closePath()

          ctx.beginPath()
          ctx.ellipse(
            w / 2,
            h / 2 + curveHeight / 2,
            w / 6,
            h / 3,
            0,
            0,
            Math.PI * 2,
          )
          ctx.fillStyle = 'lightgreen'
          ctx.fill()
          ctx.closePath()
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
