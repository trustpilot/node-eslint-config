# eslint-config-trustpilot

[![Build Status](https://travis-ci.org/trustpilot/node-eslint-config.svg?branch=master)](https://travis-ci.org/trustpilot/node-eslint-config) [![npm](https://img.shields.io/npm/v/eslint-config-trustpilot.svg)](https://www.npmjs.com/package/eslint-config-trustpilot)

Shared ESLint config for Trustpilot projects.

## Installation

```
npm install eslint-config-trustpilot --save-dev
```

You must also `npm install` the following peer dependencies:
- `eslint` (obviously)
- `babel-eslint`
- `eslint-plugin-babel`

The browser config additionally requires:
- `eslint-plugin-html`

The React config additionally requires:
- `eslint-plugin-react`

## Getting Started

Add `"extends": "trustpilot"` to your `.eslintrc` file:

```json
{
  "extends": "trustpilot"
}
```

This package includes the following complete and ready to use configurations:

- `trustpilot` - ES6 configuration
- `trustpilot/test` - [Mocha](https://mochajs.org/) tests
- `trustpilot/react` - React and JSX
- `trustpilot/browser` - ES6 browser
