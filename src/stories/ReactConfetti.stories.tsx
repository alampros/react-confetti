import type { Meta, StoryObj } from '@storybook/react'
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from 'react'
import { useWindowSize } from 'react-use'
import ReactConfetti from '../ReactConfetti'
import { randomInt } from '../utils'
import { MouseRain } from './MouseRain'
import { PartyMode } from './PartyMode'
import SizedConfetti from './SizedConfetti'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ReactConfetti',
  component: ReactConfetti,
  parameters: {
    layout: 'fullscreen',
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    docs: {
      // Optional parameter to set the description of the story. More info: https://storybook.js.org/docs/react/writing-docs/doc-blocks#component-description
      description: {
        component: 'A React component that renders confetti.',
      },
      preview: {
        height: '500px',
      },
    },
    controls: {
      disableSaveFromUI: true,
      exclude: ['canvasRef'],
    },
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    run: {
      description: 'Whether to run the confetti animation.',
      control: {
        type: 'boolean',
      },
    },
    recycle: {
      description:
        'Whether to recycle confetti pieces back into the active `numberOfPieces` when they exit the canvas.',
      control: {
        type: 'boolean',
      },
    },
    gravity: {
      control: {
        type: 'range',
        min: -1,
        max: 1,
        step: 0.001,
      },
    },
    numberOfPieces: {
      control: {
        type: 'range',
        min: 0,
        max: 1000,
        step: 1,
      },
    },
    wind: {
      control: {
        type: 'range',
        min: -1,
        max: 1,
        step: 0.001,
      },
    },
    initialVelocityX: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.001,
      },
    },
    initialVelocityY: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.001,
      },
    },
    opacity: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    canvasRef: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ReactConfetti>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default',
  render: (args) => {
    const { width, height } = useWindowSize()
    return (
      <div style={{ minHeight: 200 }}>
        <ReactConfetti {...args} width={width} height={height} />
      </div>
    )
  },
  args: {
    run: true,
    recycle: true,
    numberOfPieces: 200,
    gravity: 0.1,
    wind: 0,
    opacity: 1,
    initialVelocityX: 2,
    initialVelocityY: 2,
  },
}

export const MouseRainStory: Story = {
  name: 'Mouse Rain',
  render: (args) => {
    return <MouseRain {...args} />
  },
  args: {
    run: true,
    recycle: true,
    numberOfPieces: 100,
    gravity: 0.1,
    wind: 0,
    opacity: 1,
    initialVelocityX: 2,
    initialVelocityY: 5,
  },
}

export const Party: Story = {
  render: () => <PartyMode />,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
      include: [],
    },
  },
}

function drawSnowflake(this: any, ctx: CanvasRenderingContext2D) {
  const numPoints = this.numPoints || randomInt(3, 4) * 2
  this.numPoints = numPoints
  const innerRadius = this.radius * 0.2
  const outerRadius = this.radius * 0.8
  ctx.beginPath()
  ctx.moveTo(0, 0 - outerRadius)

  for (let n = 1; n < numPoints * 2; n++) {
    const radius = n % 2 === 0 ? outerRadius : innerRadius
    const x = radius * Math.sin((n * Math.PI) / numPoints)
    const y = -1 * radius * Math.cos((n * Math.PI) / numPoints)
    ctx.lineTo(x, y)
  }
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const Snow: Story = {
  render: (args) => (
    <div style={{ minHeight: 200 }}>
      <SizedConfetti
        drawShape={drawSnowflake}
        colors={['#AEE1FF', '#CBDDF8']}
        gravity={0.03}
        wind={0.01}
        {...args}
      />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}

function drawStar(this: any, ctx: CanvasRenderingContext2D) {
  const numPoints = this.numPoints || randomInt(4, 6)
  this.numPoints = numPoints
  const outerRadius = this.w
  const innerRadius = outerRadius / 2
  ctx.beginPath()
  ctx.moveTo(0, 0 - outerRadius)

  for (let n = 1; n < numPoints * 2; n++) {
    const radius = n % 2 === 0 ? outerRadius : innerRadius
    const x = radius * Math.sin((n * Math.PI) / numPoints)
    const y = -1 * radius * Math.cos((n * Math.PI) / numPoints)
    ctx.lineTo(x, y)
  }
  ctx.fill()
  ctx.closePath()
}

export const Stars: Story = {
  render: (args) => (
    <div style={{ minHeight: 200 }}>
      <SizedConfetti drawShape={drawStar} {...args} />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}
