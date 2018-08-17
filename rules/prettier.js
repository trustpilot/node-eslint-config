'use strict';

module.exports = {
  rules: {
    // Override default Prettier configuration
    'prettier/prettier': [
      'error',
      {
        allowParens: 'always',
        printWidth: 100,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5'
      }
    ]
  }
};
