import React from 'react'

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
}) => {
  setHtmlAttributes({
    lang: 'en',
  })
  setHeadComponents([
    <title>react-confetti: Confetti without the cleanup</title>,
    <meta name="Description" content="React component to draw confetti using the Canvas API." />
  ])
}
