'use strict';

module.exports = {
  'rules': {
    // enforce spacing inside array brackets
    'array-bracket-spacing': 0, // NOTE - DO NOT TOUCH. Use rule in babel.js
    // disallow or enforce spaces inside of single line blocks
    'block-spacing': 0,
    // enforce one true brace style
    'brace-style': [2, '1tbs'],
    // require camel case names
    'camelcase': 1,
    // enforce spacing before and after comma
    'comma-spacing': 2,
    // enforce one true comma style
    'comma-style': 1,
    // require or disallow padding inside computed properties
    'computed-property-spacing': [0, 'never'],
    // enforces consistent naming when capturing the current execution context
    'consistent-this': [0, 'that'],
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 0,
    // require function expressions to have a name
    'func-names': 0,
    // enforces use of function declarations or expressions
    'func-style': [0, 'declaration'],
    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': 0,
    // require identifiers to match the provided regular expression
    'id-match': 0,
    // this option sets a specific tab width for your code
    'indent': [1, 2, {'SwitchCase': 1, 'VariableDeclarator': 1}],
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': 0,
    // enforces spacing between keys and values in object literal properties
    'key-spacing': [1, { 'beforeColon': false, 'afterColon': true }],
    // enforces spacing before and after keywords
    'keyword-spacing': [1, {'before': true, 'after': true, 'overrides': {}}],
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': [0, 'unix'],
    // enforces empty lines around comments
    'lines-around-comment': 0,
    // specify the maximum depth that blocks can be nested
    'max-depth': [1, 4],
    // specify the maximum length of a line in your program
    'max-len': [2, { 'code': 120, 'tabWidth': 2, 'ignoreComments': true, 'ignoreUrls': true}],
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': [0, 2],
    // limits the number of parameters that can be used in the function declaration.
    'max-params': [0, 3],
    // specify the maximum number of statement allowed in a function
    'max-statements': [0, 10],
    // require a capital letter for constructors
    'new-cap': 0, // NOTE - DO NOT TOUCH. Use rule in babel.js
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 0,
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
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': [4, false],
    // disallow multiple empty lines
    'no-multiple-empty-lines': [0, {'max': 2}],
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
    // disallow space between function identifier and application
    'no-spaced-func': 0,
    // disallow the use of ternary operators
    'no-ternary': 0,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 1,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // disallow the use of Boolean literals in conditional expressions
    'no-unneeded-ternary': 2,
    // require or disallow padding inside curly braces
    'object-curly-spacing': 0, // NOTE - DO NOT TOUCH. Use rule in babel.js
    // allow just one var statement per function
    'one-var': [2, 'never'],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': [0, 'always'],
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': 0,
    // enforce padding within blocks
    'padded-blocks': 0,
    // require quotes around object literal property names
    'quote-props': 0,
    // specify whether double or single quotes should be used
    'quotes': [1, 'single'],
    // Require JSDoc comment
    'require-jsdoc': 0,
    // enforce spacing before and after semicolons
    'semi-spacing': [2, {'before': false, 'after': true}],
    // require or disallow use of semicolons instead of ASI
    'semi': [2, 'always'],
    // sort variables within the same declaration block
    'sort-vars': 0,
    // require or disallow space before blocks
    'space-before-blocks': [0, 'always'],
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': [1, { 'anonymous': 'always', 'named': 'never' }],
    // require or disallow spaces inside parentheses
    'space-in-parens': [0, 'never'],
    // require spaces around operators
    'space-infix-ops': 1,
    // Require or disallow spaces before/after unary operators
    'space-unary-ops': [0, { 'words': true, 'nonwords': false }],
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': 1,
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 0
  }
};
