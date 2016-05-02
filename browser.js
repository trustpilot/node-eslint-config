'use strict';

module.exports = {
  'extends': 'trustpilot',
  plugins: [
    'html'
  ],
  'rules': {
    'comma-dangle': [2, 'never']
  },
  'env': {
    'es6': false,
    'node': false,
    'browser': true,
    'jquery': true
  },
  'parserOptions': {
    'ecmaVersion': 5,
    'sourceType': 'script'
  }
};
