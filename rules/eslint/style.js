'use strict';

module.exports = {
  'rules': {
    // require camel case names
    'camelcase': 1,
    // allow trailing commas in object literals
    // enforces consistent naming when capturing the current execution context
    'consistent-this': [0, 'that'],
    // require function expressions to have a name
    'func-names': 0,
    // enforces use of function declarations or expressions
    'func-style': [0, 'declaration'],
    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': 0,
    // require identifiers to match the provided regular expression
    'id-match': 0,
    // enforces empty lines around comments
    'lines-around-comment': 0,
    // specify the maximum depth that blocks can be nested
    'max-depth': [1, 4],
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': [0, 2],
    // limits the number of parameters that can be used in the function declaration.
    'max-params': [0, 3],
    // specify the maximum number of statement allowed in a function
    'max-statements': [0, 10],
    // require a capital letter for constructors
    'new-cap': 0, // NOTE - DO NOT TOUCH. Use rule in babel.js
    // allow/disallow an empty newline after var statement
    'newline-after-var': 0,
    // disallow use of the Array constructor
    'no-array-constructor': 0,
    // disallow use of bitwise operators
    'no-bitwise': 0,
    // disallow use of the continue statement
    'no-continue': 0,
    // disallow comments inline after code
    'no-inline-comments': 0,
    // disallow if as the only statement in an else block
    'no-lonely-if': 1,
    // disallow negated conditions
    'no-negated-condition': 0,
    // disallow nested ternary expressions
    'no-nested-ternary': 0,
    // disallow use of the Object constructor
    'no-new-object': 0,
    // disallow use of unary operators, ++ and --
    'no-plusplus': 0,
    // disallow use of certain syntax in code
    'no-restricted-syntax': 0,
    // disallow the use of ternary operators
    'no-ternary': 0,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // disallow the use of Boolean literals in conditional expressions
    'no-unneeded-ternary': 2,
    // allow just one var statement per function
    'one-var': [2, 'never'],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': [0, 'always'],
    // Require JSDoc comment
    'require-jsdoc': 0,
    // sort variables within the same declaration block
    'sort-vars': 0,
  },
};
