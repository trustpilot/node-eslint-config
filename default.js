"use strict";

module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "babel"
  ],
  "extends": [
    "trustpilot/rules/eslint/best-practices",
    "trustpilot/rules/eslint/errors",
    "trustpilot/rules/eslint/es6",
    "trustpilot/rules/eslint/node",
    "trustpilot/rules/eslint/strict",
    "trustpilot/rules/eslint/style",
    "trustpilot/rules/eslint/variables",
    "trustpilot/rules/babel"
  ]
};
