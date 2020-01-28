<div align="center">
  <img width="200" height="200"
    src="https://raw.githubusercontent.com/Gherciu/sagittarius/master/logo.png">
  <h1>sagittarius-range</h1>
  <p>Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0. Part of <a href="https://github.com/Gherciu/sagittarius">sagittarius</a> a set of javascript most used utils.</p>
  <p>
    <a href="https://gherciu.github.io/sagittarius/">Site</a>
    | <a href="https://gherciu.github.io/sagittarius/docs/doc-introduction">Getting Started</a>
    | <a href="https://gherciu.github.io/sagittarius/docs/doc-api-introduction">API</a>
    | <a href="https://gherciu.github.io/sagittarius/blog/">Blog</a>
  </p>
</div>

[![GitHub](https://img.shields.io/github/license/Gherciu/sagittarius)](https://github.com/Gherciu/sagittarius/blob/master/LICENSE)
[![Multipack](https://img.shields.io/badge/Generated%20from-Gherciu%2Fmultipack-green)](https://github.com/Gherciu/multipack)

## Getting started.

- It can be used directly from `sagittarius-core` package or installed separately via npm runing: `npm i sagittarius-range`

```js
const range = require('sagittarius-range')
console.log(range(4)) // [0, 1, 2, 3]
console.log(range(-4)) // [0, -1, -2, -3]
console.log(range(1, 5)) // [1, 2, 3, 4]
console.log(range(0, 20, 5)) // [0, 5, 10, 15]
console.log(range(0, -4, -1)) // [0, -1, -2, -3]
console.log(range(1, 4, 0)) // [1, 1, 1]
console.log(range(0)) // []
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/sagittarius-range@latest/build/index.js"></script>
<script>
  console.log(sagittariusRange(4)) // [0, 1, 2, 3]
  console.log(sagittariusRange(-4)) // [0, -1, -2, -3]
  console.log(sagittariusRange(1, 5)) // [1, 2, 3, 4]
  console.log(sagittariusRange(0, 20, 5)) // [0, 5, 10, 15]
  console.log(sagittariusRange(0, -4, -1)) // [0, -1, -2, -3]
  console.log(sagittariusRange(1, 4, 0)) // [1, 1, 1]
  console.log(sagittariusRange(0)) // []
</script>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

#### Or you can sponsor via [Open Collective](https://opencollective.com/gherciu-gheorghe/)

[![Open Collective](https://opencollective.com/gherciu-gheorghe/tiers/sponsor.svg?avatarHeight=60)](https://opencollective.com/gherciu-gheorghe/)

## Author

**[@Gherciu/sagittarius](https://github.com/Gherciu/sagittarius)** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](https://github.com/Gherciu/sagittarius/blob/master/LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/sagittarius/contributors)).

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/sagittarius)
