import React from 'react'
import { useWindowSize } from 'react-use'

import ReactConfetti from '../ReactConfetti'

export default React.forwardRef(
  (passedProps: React.ComponentProps<typeof ReactConfetti>, ref) => {
    const { width, height } = useWindowSize()
    return (
      <ReactConfetti
        {...passedProps}
        ref={ref as any}
        width={width}
        height={height}
      />
    )
  },
)
