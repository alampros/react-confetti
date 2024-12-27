// biome-ignore lint/correctness/noUnusedImports: React needs to be in scope for JSX
import React, { useRef } from 'react'
import { useWindowSize } from 'react-use'
import useMouse from 'react-use/lib/useMouse'
import ReactConfetti from '../ReactConfetti'

export const MouseRain = (args: any) => {
  const ref = useRef(null)
  const { docX } = useMouse(ref as any)
  const { width, height } = useWindowSize()
  const activeProps = docX
    ? {
        confettiSource: {
          w: 50,
          h: 0,
          x: docX,
          y: -10,
        },
      }
    : {
        run: false,
      }
  return (
    <div style={{ minHeight: 200, width: '100%' }}>
      <p style={{ textAlign: 'center', fontFamily: 'sans-serif', color: '#999', margin: '20%' }}>
        Move your mouse
      </p>
      <ReactConfetti
        {...args}
        width={width}
        height={height}
        style={{ pointerEvents: 'none' }}
        ref={ref}
        gravity={0.5}
        {...activeProps}
      />
    </div>
  )
}
