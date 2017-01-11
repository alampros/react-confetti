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
    colors: React.PropTypes.arrayOf(React.PropTypes.string),
  };

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
  }

  componentDidMount() {
    this.confetti = confetti(this.refs.confetti)
                      .numberOfPieces(this.props.numberOfPieces)
                      .friction(this.props.friction)
                      .wind(this.props.wind)
                      .gravity(this.props.gravity)
                      .colors(this.props.colors);
  }

  componentWillReceiveProps(nextProps) {
    this.confetti
      .numberOfPieces(nextProps.numberOfPieces)
      .friction(nextProps.friction)
      .wind(nextProps.wind)
      .gravity(nextProps.gravity)
      .colors(nextProps.colors);
  }

  render() {
    let canvasStyles = Object.assign({}, {
      zIndex: 2,
      position: 'absolute',
      top: 0,
      left: 0,
      width: this.props.width,
      height: this.props.height,
      pointerEvents: 'none',
      WebkitPointerEvents: 'none',
      MozPointerEvents: 'none',
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
