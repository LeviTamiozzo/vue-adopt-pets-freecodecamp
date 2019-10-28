module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi": 0,
    "quotes": 0,
    "space-before-function-paren": 0,
    "indent": 0,
    "no-unused-vars": 0,
    "eol-last": 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
