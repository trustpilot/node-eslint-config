# eslint-config-trustpilot

[![npm](https://img.shields.io/npm/v/eslint-config-trustpilot.svg)](https://www.npmjs.com/package/eslint-config-trustpilot)
[![Build Status](https://travis-ci.org/trustpilot/node-eslint-config.svg?branch=master)](https://travis-ci.org/trustpilot/node-eslint-config)
[![Code Climate](https://codeclimate.com/github/trustpilot/node-eslint-config/badges/gpa.svg)](https://codeclimate.com/github/trustpilot/node-eslint-config)

Shared ESLint config for Trustpilot projects.

### Install
```
$ npm install eslint-config-trustpilot --save-dev
```

You must also `npm install` the following peer dependencies:
- `eslint@2.x` (obviously)
- `babel-eslint@5.x`
- `eslint-plugin-babel@3.x`

The browser config additionally requires:
- `eslint-plugin-html@1.x`

The React config additionally requires:
- `eslint-plugin-react@3.x`

### Usage
`.eslintrc`
```json
{
  "extends": "trustpilot"
}
```

`.eslintrc` for Mocha tests
```json
{
  "extends": "trustpilot/test"
}
```

`.eslintrc` for React and JSX
```json
{
  "extends": "trustpilot/react"
}
```

`.eslintrc` for browsers
```json
{
  "extends": "trustpilot/browser"
}
```
