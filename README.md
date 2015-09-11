# promise-if

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> The if statement (or unary operator) for promises

## Installation

Install `promise-if` using [npm](https://www.npmjs.com/):

```bash
npm install --save promise-if
```

## Usage

### Module usage

```javascript
var if = require('promise-if');

if(Promise.resolve(false), Promise.resolve('hey'), Promise.resolve('ho'))
  .then(function (val) {
    // val === 'ho'
  });
```

## API

### `if(condition, trueVal, falsecondition)`

| Name | Type | Description |
|------|------|-------------|
| `condition` | `Mixed`| Condition |
| `trueVal` | `Mixed`| What to return if condition resolves to a "truthy" value |
| `falseVal` | `Mixed`| What to return if condition resolves to a "falsy" value |

Returns: `Promise`, which resolves to what either `trueVal` or `falseVal` resolves to depending on `condition`

## Related

* [`promise-or`](https://github.com/joakimbeng/promise-or)
* [`promise-and`](https://github.com/joakimbeng/promise-and)
* [`promise-not`](https://github.com/joakimbeng/promise-not)

## License

MIT © Joakim Carlstein

[npm-url]: https://npmjs.org/package/promise-if
[npm-image]: https://badge.fury.io/js/promise-if.svg
[travis-url]: https://travis-ci.org/joakimbeng/promise-if
[travis-image]: https://travis-ci.org/joakimbeng/promise-if.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
