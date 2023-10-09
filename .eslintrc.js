module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@babel/eslint-parser',
  ecmaVersion: 2020,
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
