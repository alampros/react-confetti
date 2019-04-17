import { addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'
addParameters({
  options: {
    sortStoriesByKind: true,
    theme: create({
      base: 'light',
      brandTitle: 'React Confetti',
      brandUrl: 'https://github.com/alampros/react-confetti',
    }),
  },
})

const req = require.context('../stories', true, /\.stor(y|ies)\.jsx?$/)
function loadStories() {
  req.keys()
    .sort((a, b) => {
      if(a.includes('test.') && b.includes('test.')) return 0
      if(a.includes('test.') && !b.includes('test.')) return 1
      if(!a.includes('test.') && b.includes('test.')) return -1
      return a.localeCompare(b)
    })
    .forEach(filename => req(filename))
}

configure(loadStories, module)
