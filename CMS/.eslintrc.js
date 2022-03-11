module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'space-before-function-paren': 0,
    indent: 0,
    'no-trailing-spaces': 0,
    'no-unused-vars': 0,
    semi: 0,
    quotes: 0,
    'space-before-blocks': 0,
    'space-infix-ops': 0,
    'key-spacing': 0,
    'no-useless-return': 0,
    'padded-blocks': 0,
    camelcase: 0,
    'keyword-spacing': 0,
    'object-curly-spacing': 0,
    'comma-spacing': 0,
    'arrow-spacing': 0,
    'comma-dangle': 0,
    'eol-last': 0
  }
}
