import React from 'react'
import { Inspector, useBooleanKnob, useRangeKnob } from 'retoggle'
import Confetti from '../../..'

console.log(Confetti)

export default (props) => {
  const [run] = useBooleanKnob('Run', true)
  const [recycle] = useBooleanKnob('Recycle', true)
  const [numberOfPieces] = useRangeKnob('# Pieces', {
    initialValue: 200,
    min: 0,
    max: 1000,
  })
  const [opacity] = useRangeKnob('Opacity', {
    initialValue: 100,
    min: 0,
    max: 100,
  })
  const [wind] = useRangeKnob('Wind', {
    initialValue: 0,
    min: -100,
    max: 100,
  })
  const [gravity] = useRangeKnob('Gravity', {
    initialValue: 10,
    min: -100,
    max: 100,
  })
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'
    }}
    >
      <Confetti
        run={run}
        recycle={recycle}
        numberOfPieces={numberOfPieces}
        opacity={opacity / 100}
        wind={wind / 1000}
        gravity={gravity / 100}
        {...props}
      />
      <Inspector />
    </div>
  )
}
