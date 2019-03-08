module.exports = {
  root: true,
  extends: [
    'standard',
    'standard-react',
  ],
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  overrides: [
    {
      files: ['**/*.js'],
      parser: 'babel-eslint',
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
        }],
      },
    },
  ],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'quote-props': ['error', 'as-needed'],
    'comma-dangle': ['warn', {
      arrays: 'only-multiline',
      objects: 'always-multiline',
      imports: 'only-multiline',
    }],
    quotes: ['warn', 'single'],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-closing-tag-location': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-indent': [2, 2, { checkAttributes: true }],
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/prop-types': ['error', { ignore: ['children', 'className', 'style'] }],
    'keyword-spacing': ['error', {
      overrides: {
        if: { after: false },
        for: { after: false },
        while: { after: false },
        catch: { after: false },
        switch: { after: false },
      },
    }],
  },
}
