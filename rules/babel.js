'use strict';

module.exports = {
  'rules': {
    // Ignores capitalized decorators (@Decorator)
    'babel/new-cap': 0,
    // Doesn't fail when using object spread (...obj)
    'babel/object-shorthand': 0,
    // Guard against awaiting async functions inside of a loop
    'babel/no-await-in-loop': 0,
    // Require a particular separator between properties in Flow object types
    'babel/flow-object-type': 0,
  },
};
