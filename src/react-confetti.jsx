import React from 'react';
import confetti from './confetti';

export default class Confetti extends React.Component {
  static propTypes = {
    style: React.PropTypes.object,
    width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
    height: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
    numberOfPieces: React.PropTypes.number,
    friction: React.PropTypes.number,
    wind: React.PropTypes.number,
    gravity: React.PropTypes.number,
  };;
  static defaultProps = {
    width: '100%',
    height: '100%',
    numberOfPieces: 200,
    friction: 0.99,
    wind: 0,
    gravity: 0.1,
  }
  componentDidMount() {
    confetti(
      this.refs.confetti,
      this.props.numberOfPieces,
      this.props.friction,
      this.props.wind,
      this.props.gravity
    );
  }
  render() {
    let canvasStyles = Object.assign({}, {
      zIndex: 2,
      position: 'absolute',
      top: 0,
      left: 0,
      width: this.props.width,
      height: this.props.height,
    }, this.props.style);
    return (
      <canvas
        width={this.props.width}
        height={this.props.height}
        ref="confetti"
        style={canvasStyles}
      />
    );
  }
}
