module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  'globals': {
    'bar': true
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 2 : 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 2,
    'semi': [2, 'always']
  }
};