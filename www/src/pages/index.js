import React from 'react'
import { Helmet } from 'react-helmet'
import SizedConfetti from '../components/SizedConfetti.js'
import './index.css'

export default class Index extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>react-confetti: Confetti without the cleanup</title>
          <meta name="Description" content="React component to draw confetti using the Canvas API." />
        </Helmet>
        <div className="app-container">
          <SizedConfetti />
          <div className="pad-container">
            <h1>react-confetti</h1>
            <p>
              <a href="http://github.com/alampros/react-confetti">http://github.com/alampros/react-confetti</a>
            </p>
          </div>
        </div>
      </>
    )
  }
}
