module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 1,
    'react/jsx-sort-props': [1, {ignoreCase: true}],
  },
};
