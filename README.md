# eslint-config-trustpilot

[![Build Status](https://travis-ci.org/trustpilot/node-eslint-config.svg?branch=master)](https://travis-ci.org/trustpilot/node-eslint-config) [![npm](https://img.shields.io/npm/v/eslint-config-trustpilot.svg)](https://www.npmjs.com/package/eslint-config-trustpilot)

Shared eslint and prettier config for Trustpilot projects.

In short, we use prettier for code formatting and eslint for everything else.

## Installation

```
yarn add --dev eslint-config-trustpilot
```


You also need to install the following peer dependencies:

```
yarn add --dev eslint babel-eslint eslint-plugin-babel eslint-plugin-prettier
```


The browser config additionally requires:
- `yarn add --dev eslint-plugin-html`

The React config additionally requires:
- `yarn add --dev eslint-plugin-react`

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
