'use strict';

module.exports = {
  'extends': 'trustpilot',
  'plugins': [
    'html'
  ],
  'rules': {
    'prefer-template': 0
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
