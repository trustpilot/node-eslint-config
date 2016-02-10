# eslint-config-trustpilot
Trustpilot's ESLint configuration

### Install
```
npm install eslint-config-trustpilot --save-dev
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

```json
// .eslintrc
{
  "extends": "trustpilot"
}
```

```json
// .eslintrc for Mocha tests
{
  "extends": "trustpilot/test"
}
```

```json
// .eslintrc for React + JSX
{
  "extends": "trustpilot/react"
}
```

```json
// .eslintrc for browsers
{
  "extends": "trustpilot/browser"
}
```

### Summary
*TODO*
- Style things should be warnings
- Logic things should be errors
