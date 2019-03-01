import React, { CanvasHTMLAttributes } from 'react'
import Confetti, { IConfettiOptions, confettiDefaults } from './Confetti'

interface ComponentProps extends IConfettiOptions {
  [key: string]: any
}
export type Props = ComponentProps & CanvasHTMLAttributes<HTMLCanvasElement>

export default class ReactConfetti extends React.Component<Props> {
  static defaultProps = {
    ...confettiDefaults
  }

  canvas: React.RefObject<HTMLCanvasElement> = React.createRef()
  confetti?: Confetti

  componentDidMount() {
    if(this.canvas.current) {
      const opts = extractCanvasProps(this.props)[0]
      this.confetti = new Confetti(this.canvas.current, opts)
    }
  }

  render() {
    const [ confettiOptions, passedProps ] = extractCanvasProps(this.props)
    console.log('confettiOptions:', confettiOptions)
    console.log('passedProps:', passedProps)
    const canvasStyles = {
      zIndex: 2,
      position: 'absolute' as 'absolute' | 'fixed' | 'relative' | undefined,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      ...passedProps.style
    }
    return (
      <canvas
        width={confettiOptions.width}
        height={confettiOptions.height}
        ref={this.canvas}
        {...passedProps}
        style={canvasStyles}
      />
    )
  }
}

function extractCanvasProps(props: Props): [IConfettiOptions, any] {
  const confettiOptions: IConfettiOptions = {}
  const rest: any = {}
  const confettiOptionKeys = [...Object.keys(confettiDefaults), 'confettiSource']
  for(const prop in props) {
    const val = props[prop as string]
    if(confettiOptionKeys.includes(prop)) {
      confettiOptions[prop as keyof IConfettiOptions] = val
    } else {
      rest[prop] = val
    }
  }
  return [confettiOptions, rest]
}
