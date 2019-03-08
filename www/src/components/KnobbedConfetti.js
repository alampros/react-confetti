import React, { useState } from 'react'
import Range from './RangeInput'
import Confetti from '../../..'
import styles from './KnobbedConfetti.module.css'

const numberFormatter = new Intl.NumberFormat({ style: 'decimal', minimumIntegerDigits: 4, useGrouping: true })
const percentageFormatter = new Intl.NumberFormat({ style: 'percent', minimumIntegerDigits: 4 })

export default (props) => {
  const [run, setRun] = useState(true)
  const [recycle, setRecycle] = useState(true)
  const [numberOfPieces, setNumberOfPieces] = useState(200)
  const [opacity, setOpacity] = useState(100)
  const [wind, setWind] = useState(0)
  const [gravity, setGravity] = useState(10)
  return (
    <div className={styles.root}>
      <Confetti
        run={run}
        recycle={recycle}
        numberOfPieces={numberOfPieces}
        opacity={opacity / 100}
        wind={wind / 500}
        gravity={gravity / 100}
        style={{ zIndex: -1 }}
        debug
        {...props}
      />
      <nav className={styles.nav}>
        <label className={styles.checkLabel}>
          <span>Run:</span>
          <input
            name="run"
            type="checkbox"
            checked={run}
            onChange={e => setRun(e.target.checked)}
          />
        </label>
        <label className={styles.checkLabel}>
          <span>Recycle:</span>
          <input
            name="recycle"
            type="checkbox"
            checked={recycle}
            onChange={e => setRecycle(e.target.checked)}
          />
        </label>
        <div className={styles.rangeInputGroup}>
          <label htmlFor="numberOfPieces"># Pieces:</label>
          <Range
            name="numberOfPieces"
            step={1}
            min={0}
            max={1000}
            value={numberOfPieces}
            onChange={e => setNumberOfPieces(parseInt(e.currentTarget.value, 10))}
          />
          <span>{numberFormatter.format(numberOfPieces)}</span>
        </div>
        <div className={styles.rangeInputGroup}>
          <label htmlFor="opacity">Opacity:</label>
          <Range
            name="opacity"
            step={1}
            min={0}
            max={100}
            value={opacity}
            onChange={e => setOpacity(parseInt(e.currentTarget.value, 10))}
          />
          <span>{percentageFormatter.format(opacity)}</span>
        </div>
        <div className={styles.rangeInputGroup}>
          <label htmlFor="wind">Wind:</label>
          <Range
            name="wind"
            step={1}
            min={-100}
            max={100}
            value={wind}
            onChange={e => setWind(parseInt(e.currentTarget.value, 10))}
          />
          <span>{numberFormatter.format(wind / 500)}</span>
        </div>
        <div className={styles.rangeInputGroup}>
          <label htmlFor="gravity">Gravity:</label>
          <Range
            name="gravity"
            step={1}
            min={-100}
            max={100}
            value={gravity}
            onChange={e => setGravity(parseInt(e.currentTarget.value, 10))}
          />
          <span>{numberFormatter.format(gravity / 100)}</span>
        </div>
      </nav>
    </div>
  )
}
