# react-confetti
Confetti without the cleanup. [Demo](http://alampros.github.io/react-confetti/)

Based on a pen by @Gthibaud: http://codepen.io/Gthibaud/pen/BoaBZK

[![demogif][2]][1]

[1]: http://alampros.github.com/react-confetti
[2]: http://alampros.github.io/react-confetti/confetti-demo.gif (demo gif)

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

### Dimensions and Aspect Ratio

In order to maintain the aspect ratio of the canvas, you need to update the `width` and `height` props of the component when the window resizes. [react-dimensions](https://github.com/digidem/react-dimensions) is a library to help you do this. See the [source for the docs](https://github.com/alampros/react-confetti/blob/develop/src/docs.jsx) for an example or implement like so:

```jsx
import React from 'react'
import Confetti from 'react-confetti'
import Dimensions from 'react-dimensions'

export default Dimensions()(class MyComponent extends React.PureComponent {
  render() {
    return (
      <Confetti
        width={this.props.containerWidth}
        height={this.props.containerHeight}
      />
    )
  }
})
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
`colors`         | `Array` of `String`  | `['#f44336'`</br>`'#e91e63'`</br>`'#9c27b0'`</br>`'#673ab7'`</br>`'#3f51b5'`</br>`'#2196f3'`</br>`'#03a9f4'`</br>`'#00bcd4'`</br>`'#009688'`</br>`'#4CAF50'`</br>`'#8BC34A'`</br>`'#CDDC39'`</br>`'#FFEB3B'`</br>`'#FFC107'`</br>`'#FF9800'`</br>`'#FF5722'`</br>`'#795548']`</br> | All available Colors for the confetti pieces
`opacity`        | `Number`             | 1.0      |
