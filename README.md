# eslint-config-trustpilot

[![Build Status](https://travis-ci.org/trustpilot/node-eslint-config.svg?branch=master)](https://travis-ci.org/trustpilot/node-eslint-config) [![npm](https://img.shields.io/npm/v/eslint-config-trustpilot.svg)](https://www.npmjs.com/package/eslint-config-trustpilot)

Shared eslint and prettier config for Trustpilot projects.

In short, we use prettier for code formatting and eslint for everything else.

## Installation

```
npm i -D eslint-config-trustpilot
```

You also need to install the following peer dependencies:

```
npm i -D eslint babel-eslint eslint-plugin-babel eslint-plugin-prettier eslint-config-prettier prettier
```

The browser config additionally requires:

- `npm i -D eslint-plugin-html`

The React config additionally requires:

- `npm i -D eslint-plugin-react`

The Typescript config additionally requires:

- `npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser`

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
- `trustpilot/typescript` - Typescript (Use alongside `trustpilot/react` to have both `typescript` and `react`)
