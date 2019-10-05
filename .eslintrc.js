const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
  'airbnb',
  'plugin:@typescript-eslint/recommended',
  'prettier/@typescript-eslint',
  'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
  settings: {
    'import/resolver': {
      node: {
        'extensions': ['.ts', '.d.ts'],
      },
    },
  },
}
