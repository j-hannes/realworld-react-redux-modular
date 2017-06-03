const path = require('path')

module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, './src')],
      },
    },
  },
  rules: {
    'arrow-parens': 'off',
    'generator-star-spacing': 'off',
    'import/prefer-default-export': 'off',
    'max-len': ['warn', 80],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    semi: ['warn', 'never'],
  },
}
