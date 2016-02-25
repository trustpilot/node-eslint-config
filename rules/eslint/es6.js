"use strict";

module.exports = {
  "env": {
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6
  },
  "rules": {
    // require braces in arrow function body
    "arrow-body-style": 0,
    // require parens in arrow function arguments
    "arrow-parens": 1,
    // require space before/after arrow function's arrow
    "arrow-spacing": 1,
    // verify super() callings in constructors
    "constructor-super": 0,
    // enforce the spacing around the * in generator functions
    "generator-star-spacing": 0,
    // disallow modifying variables of class declarations
    "no-class-assign": 0,
    // disallow arrow functions where they could be confused with comparisons
    "no-confusing-arrow": 1,
    // disallow modifying variables that are declared using const
    "no-const-assign": 2,
    // disallow duplicate name in class members
    "no-dupe-class-members": 0,
    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": 0,
    // require let or const instead of var
    "no-var": 0,
    // require method and property shorthand syntax for object literals
    "object-shorthand": 0,
    // suggest using arrow functions as callbacks
    "prefer-arrow-callback": 1,
    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": 1,
    // suggest using Reflect methods where applicable
    "prefer-reflect": 0,
    // suggest using the spread operator instead of .apply()
    "prefer-spread": 0,
    // suggest using template literals instead of strings concatenation
    "prefer-template": 1,
    // disallow generator functions that do not have yield
    "require-yield": 0
  }
};
