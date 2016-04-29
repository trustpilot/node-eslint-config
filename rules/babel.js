'use strict';

module.exports = {
  'rules': {
    // Handles async/await functions correctly
    'babel/generator-star-spacing': 0,
    // Ignores capitalized decorators (@Decorator)
    'babel/new-cap': 0,
    // Handles destructuring arrays with flow type in function parameters
    'babel/array-bracket-spacing': [0, 'never'],
    // Doesn't complain about export x from "mod"; or export * as x from "mod";
    'babel/object-curly-spacing': [0, 'never'],
    // Doesn't fail when using object spread (...obj)
    'babel/object-shorthand': 0,
    // Handles async functions correctly
    'babel/arrow-parens': 1,
    // Guard against awaiting async functions inside of a loop
    'babel/no-await-in-loop': 0,
    // Require a particular separator between properties in Flow object types
    'babel/flow-object-type': 0
  }
};
