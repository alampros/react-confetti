import PropTypes from 'prop-types'
import React from 'react'
import confetti from './confetti'

export default class Confetti extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    numberOfPieces: PropTypes.number,
    friction: PropTypes.number,
    wind: PropTypes.number,
    gravity: PropTypes.number,
    colors: PropTypes.arrayOf(PropTypes.string),
    opacity: PropTypes.number,
  }

  static defaultProps = {
    width: '100%',
    height: '100%',
    numberOfPieces: 200,
    friction: 0.99,
    wind: 0,
    gravity: 0.1,
    colors: [
      '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
      '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
      '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
      '#FF5722', '#795548',
    ],
    opacity: 1.0
  }

  componentDidMount() {
    this.confetti = confetti(this.canvas)
      .numberOfPieces(this.props.numberOfPieces)
      .friction(this.props.friction)
      .wind(this.props.wind)
      .gravity(this.props.gravity)
      .colors(this.props.colors)
      .opacity(this.props.opacity)()
  }

  componentWillReceiveProps(nextProps) {
    this.confetti
      .numberOfPieces(nextProps.numberOfPieces)
      .friction(nextProps.friction)
      .wind(nextProps.wind)
      .gravity(nextProps.gravity)
      .colors(nextProps.colors)
      .opacity(nextProps.opacity)
  }

  render() {
    const {
      width,
      height,
      style,
    } = this.props
    const canvasStyles = Object.assign({}, {
      zIndex: 2,
      position: 'absolute',
      top: 0,
      left: 0,
      width,
      height,
      pointerEvents: 'none',
      WebkitPointerEvents: 'none',
      MozPointerEvents: 'none',
    }, style)

    return (
      <canvas
        width={width}
        height={height}
        ref={c => (this.canvas = c)}
        style={canvasStyles}
      />
    )
  }
}
