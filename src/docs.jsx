import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import sizeMe from 'react-sizeme'
import Confetti from './react-confetti'

const DimensionedExample = sizeMe({
  monitorHeight: true,
  monitorWidth: true,
})(class Example extends React.PureComponent {
  static propTypes = {
    size: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
  }
  state = {
    run: true,
  }
  toggleRun = () => {
    this.setState({ run: !this.state.run })
  }
  handleRunChange = () => {
    this.toggleRun()
  }
  render() {
    const { run } = this.state
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <label>
          Run:
          <input
            name="runConfetti"
            type="checkbox"
            checked={run}
            onChange={this.handleRunChange}
          />
        </label>
        <Confetti {...this.state} {...this.props.size} />
      </div>
    )
  }
})

ReactDOM.render(<DimensionedExample />, document.getElementById('app'))
