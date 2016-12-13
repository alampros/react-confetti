# react-confetti
Confetti without the cleanup. [Demo](http://alampros.github.io/react-confetti/)

Based on a pen by @Gthibaud: http://codepen.io/Gthibaud/pen/BoaBZK

[![demogif][2]][1]

[1]: http://alampros.github.com/react-confetti
[2]: http://alampros.github.io/react-confetti/assets/confetti-demo.gif (demo gif)

## Install

```sh
npm i -S react-confetti
```

## Use

```javascript
import Confetti from 'react-confetti'
import React from 'react'

export default class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>My Component contents</h1>
        <Confetti />
      </div>
    )
  }
}
```


## Props

Property         | Type                 | Default  | Description
---              | ---                  | ---      | ---
`width`          | `Number` or `String` | `'100%'` | Width of the `<canvas>` element.
`height`         | `Number` or `String` | `'100%'` | Height of the `<canvas>` element.
`numberOfPieces` | `Number`             | 200      | Number of confetti pieces at one time.
`friction`       | `Number`             | 0.99     |
`wind`           | `Number`             | 0        |
`gravity`        | `Number`             | 0.1      |
`colors`         | `Array` of `String`  | `[ '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548' ]`     | All available Colors for the confetti pieces
