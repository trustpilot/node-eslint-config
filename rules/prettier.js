'use strict';

module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    // Override default Prettier configuration
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        printWidth: 100,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
      },
    ],
  },
};
