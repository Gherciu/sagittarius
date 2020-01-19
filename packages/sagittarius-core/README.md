<div align="center">
  <img width="200" height="200"
    src="https://raw.githubusercontent.com/Gherciu/sagittarius/master/logo.png">
  <h1>sagittarius</h1>
  <p>A set of javascript most used utils.</p>
  <p>
    <a href="https://gherciu.github.io/sagittarius/docs/doc-introduction">Getting Started</a>
    | <a href="https://gherciu.github.io/sagittarius/docs/doc-api-introduction">API</a>
    | <a href="https://gherciu.github.io/sagittarius/blog/">Blog</a>
  </p>
</div>

[![GitHub](https://img.shields.io/github/license/Gherciu/sagittarius)](https://github.com/Gherciu/sagittarius/blob/master/LICENSE)
[![Multipack](https://img.shields.io/badge/Generated%20from-Gherciu%2Fmultipack-green)](https://github.com/Gherciu/multipack)

## Getting started.

- Install: `npm i sagittarius-core`

```js
const { random, isEmpty } = require('sagittarius-core')
// Or install needed utils separately
// const random =  require('sagittarius-random')

// check if argument is empty
console.log(isEmpty({})) // true
// get a random nr
console.log(random(12, 21))
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/sagittarius-core@latest/build/index.js"></script>
<script>
  // check if argument is empty
  console.log(sagittarius.isEmpty({ a: 21 })) // false
  // get a random nr
  console.log(sagittarius.random(12, 21))
</script>
```

See more utils in description below

#### Data generation

- [random](https://gherciu.github.io/sagittarius/docs/doc-api-sagittarius-random): Random number generation from range
- [uniqueId](https://gherciu.github.io/sagittarius/docs/doc-api-sagittarius-unique-id): Generates a unique ID. If `prefix` is given, the ID is appended to it.

#### Data validation

- [isEmpty](https://gherciu.github.io/sagittarius/docs/doc-api-sagittarius-is-empty): Check if provided argument is empty

#### Data transformation

- [toNumber](https://gherciu.github.io/sagittarius/docs/doc-api-sagittarius-to-number): Transform provided argument to number

#### Data manipulation

- [debounce](https://gherciu.github.io/sagittarius/docs/doc-api-sagittarius-debounce): Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed since the last time the debounced function was invoked.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**[@Gherciu/sagittarius](https://github.com/Gherciu/sagittarius)** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](https://github.com/Gherciu/sagittarius/blob/master/LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/sagittarius/contributors)).

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/sagittarius)
