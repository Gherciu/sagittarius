<div align="center">
  <img width="200" height="200"
    src="https://raw.githubusercontent.com/Gherciu/sagittarius/master/logo.png">
  <h1>sagittarius-uniq</h1>
  <p>Filter and return uniq values from an array. Part of <a href="https://github.com/Gherciu/sagittarius">sagittarius</a> a set of javascript most used utils.</p>
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

- It can be used directly from `sagittarius-core` package or installed separately via npm runing: `npm i sagittarius-uniq`

```js
const uniq = require('sagittarius-uniq')
console.log(uniq([21, 'twenty one', 21])) // [21, 'twenty one']
console.log(uniq([{ a: 21 }, { a: 'twenty one' }, { a: 21 }])) // [{a: 21}, {a: 'twenty one'}]
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/sagittarius-uniq@latest/build/index.js"></script>
<script>
  console.log(sagittariusUniq([21, 'twenty one', 21])) // [21, 'twenty one']
  console.log(sagittariusUniq([{ a: 21 }, { a: 'twenty one' }, { a: 21 }])) // [{a: 21}, {a: 'twenty one'}]
</script>
```

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
