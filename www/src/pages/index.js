import React from 'react'
import SizedConfetti from '../components/SizedConfetti.js'
import './index.scss'

export default class Index extends React.PureComponent {
  render() {
    return (
      <div className="app-container">
        <div className="pad-container">
          <h1>react-confetti</h1>
          <p>
            <a href="http://github.com/alampros/react-confetti">http://github.com/alampros/react-confetti</a>
          </p>
        </div>
        <SizedConfetti />
      </div>
    )
  }
}
