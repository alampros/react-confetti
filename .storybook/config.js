import { addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'React Confetti',
      brandUrl: 'https://github.com/alampros/react-confetti',
    }),
  },
})

const req = require.context('../stories', true, /\.stor(y|ies)\.jsx?$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
