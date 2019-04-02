import React, { Component, CanvasHTMLAttributes } from 'react'
import Confetti, { IConfettiOptions, confettiDefaults } from './Confetti'

export type Props = Partial<IConfettiOptions> & CanvasHTMLAttributes<HTMLCanvasElement>

export class ReactConfetti extends Component<Props> {
  static readonly defaultProps = {
    ...confettiDefaults,
  }

  canvas: React.RefObject<HTMLCanvasElement> = React.createRef()
  confetti?: Confetti

  componentDidMount() {
    if(this.canvas.current) {
      const opts = extractCanvasProps(this.props)[0]
      this.confetti = new Confetti(this.canvas.current, opts)
    }
  }
  componentWillReceiveProps(nextProps: Props) {
    const confettiOptions = extractCanvasProps(nextProps)[0]
    if(this.confetti) {
      this.confetti.options = confettiOptions as IConfettiOptions
    }
  }
  componentWillUnmount() {
    this.confetti = undefined
  }

  render() {
    const [ confettiOptions, passedProps ] = extractCanvasProps(this.props)
    const canvasStyles = {
      zIndex: 2,
      position: 'absolute' as 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      ...passedProps.style,
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

function extractCanvasProps(props: Partial<IConfettiOptions> | any): [Partial<IConfettiOptions>, Partial<CanvasHTMLAttributes<HTMLCanvasElement>>] {
  const confettiOptions: Partial<IConfettiOptions> = {}
  const rest: any = {}
  const confettiOptionKeys = [...Object.keys(confettiDefaults), 'confettiSource', 'drawShape']
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

export default ReactConfetti
