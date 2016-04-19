import React from 'react'
import confetti from './confetti'

export default class Confetti extends React.Component {
  static propTypes = {
    width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
    height: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
  }
  static defaultProps = {
    width: '100%',
    height: '100%',
  }
  render() {
    let canvasStyles = {
      zIndex: 2,
      position: absolute,
      top: 0,
      left: 0,
      width: this.props.width,
      height: this.props.height,
    }
    return (
      <canvas ref="confetti" style={canvasStyles} />
    )
  }
}
