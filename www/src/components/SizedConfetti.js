import PropTypes from 'prop-types'
import React from 'react'
import sizeMe from 'react-sizeme'
import Confetti from '../../../dist/react-confetti.js'

export default sizeMe({
  monitorHeight: true,
  monitorWidth: true,
  monitorPosition: false,
})(class Example extends React.PureComponent {
  static propTypes = {
    size: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
      position: PropTypes.string,
    }),
  }
  state = {
    recycle: true,
    run: true,
    numberOfPieces: 200,
  }
  toggleRun = () => {
    this.setState({ run: !this.state.run })
  }
  toggleRecycle = () => {
    this.setState({ recycle: !this.state.recycle })
  }
  handleNumOfPiecesChange = (e) => {
    const numberOfPieces = Number(e.target.value)
    if(Number.isNaN(numberOfPieces)) {
      console.warn('Invalid number of pieces')
      return
    }
    this.setState({
      numberOfPieces,
    })
  }
  render() {
    const {
      recycle,
      run,
      numberOfPieces,
    } = this.state
    const {
      width,
      height,
    } = this.props.size
    return (
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'
      }}
      >
        <div className="controls">
          <label className="form-group">
            <span>Run</span>
            <input
              name="runConfetti"
              type="checkbox"
              checked={run}
              onChange={this.toggleRun}
            />
          </label>
          <label className="form-group">
            <span>Recycle</span>
            <input
              name="recycleConfetti"
              type="checkbox"
              checked={recycle}
              onChange={this.toggleRecycle}
            />
          </label>
          <div className="form-group">
            <label># Pieces</label>
            <input
              name="numberOfPieces"
              type="number"
              min={0}
              max={10000}
              step={100}
              onChange={this.handleNumOfPiecesChange}
              value={numberOfPieces}
            />
          </div>
        </div>
        <Confetti
          {...this.state}
          width={width}
          height={height}
        />
      </div>
    )
  }
})
