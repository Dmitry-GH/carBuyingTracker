module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['@react-native-community', 'prettier', 'prettier/@typescript-eslint'],
  plugins: ['@typescript-eslint'],
  rules: {
    'react/jsx-sort-props': [1, {ignoreCase: true}],
    'max-len': ['error', {code: 90, ignoreStrings: true}],
  },
};
