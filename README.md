<h1 align="center">
  <!-- Logo -->
  <br/>
  Is-TypeOf
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg" alt="API Stability"/>
  </a>
  <!-- TypeScript -->
  <a href="http://typescriptlang.org">
    <img src="https://img.shields.io/badge/%3C%2F%3E-typescript-blue.svg" alt="TypeScript"/>
  </a>
  <!-- Prettier -->
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Styled with prettier"/>
  </a>
  <!-- Travis build -->
  <a href="https://travis-ci.org/DylanPiercey/is-typeof">
  <img src="https://img.shields.io/travis/DylanPiercey/is-typeof.svg" alt="Build status"/>
  </a>
  <!-- Coveralls coverage -->
  <a href="https://coveralls.io/github/DylanPiercey/is-typeof">
    <img src="https://img.shields.io/coveralls/DylanPiercey/is-typeof.svg" alt="Test Coverage"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/is-typeof">
    <img src="https://img.shields.io/npm/v/is-typeof.svg" alt="NPM Version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/is-typeof">
    <img src="https://img.shields.io/npm/dm/is-typeof.svg" alt="Downloads"/>
  </a>
  <!-- Size -->
  <a href="https://npmjs.org/package/is-typeof">
    <img src="https://img.shields.io/badge/size-618b-green.svg" alt="Browser Bundle Size"/>
  </a>
</h1>

Lightweight library for better type checking in JavaScript.

# Installation

```console
npm install is-typeof
```

# Examples

```javascript
import * as check from "is-typeof";

// String
check.isString("hello"); // true
check.isString(1); // false

// Number
check.isNumber(1); // true
check.isNumber("hello"); // false

// Boolean
check.isBoolean(true); // true
check.isBoolean(1); // false

// Date
check.isDate(new Date); // true
check.isDate(1); // false

// RegExp
check.isRegExp(/a/g); // true
check.isRegExp(1); // false

// Error
check.isError(new TypeError("Bad!")); // true
check.isError(1); // false

// Function
check.isFunction(function () {}); // true
check.isFunction(1); // false

// Arguments
(function () {
	check.isArguments(arguments); // true
	check.isArguments([]); // false
}());

// Object
check.isObject({}); // true
check.isObject([]); // false

// Array
check.isArray([]); // true
check.isArray({}); // false

// Stream
check.isStream(fs.createReadStream(...)); // true
check.isStream({}); // false

// Buffer
check.isBuffer(new Buffer("")); // true
check.isBuffer(""); // false

// Empty
check.isEmpty([]); // true
check.isEmpty([1]); // false
```

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
