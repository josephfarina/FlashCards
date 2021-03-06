module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:jest/style'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
  },
};
