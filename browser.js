'use strict';

module.exports = {
  'extends': 'trustpilot',
  plugins: [
    'html',
  ],
  'env': {
    'es6': false,
    'node': false,
    'browser': true,
    'jquery': true,
  },
  'parserOptions': {
    'ecmaVersion': 5,
  },
};
