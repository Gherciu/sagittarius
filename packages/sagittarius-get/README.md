<div align="center">
  <img width="200" height="200"
    src="https://raw.githubusercontent.com/Gherciu/sagittarius/master/logo.png">
  <h1>sagittarius-get</h1>
  <p>Gets the value at path of provided argument. If the resolved value is undefined, the defaultValue is returned in its place. Part of <a href="https://github.com/Gherciu/sagittarius">sagittarius</a> a set of javascript most used utils.</p>
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

- It can be used directly from `sagittarius-core` package or installed separately via npm runing: `npm i sagittarius-get`

```js
const get = require('sagittarius-get')
console.log(get({ a: { b: 21 } }, 'a.b')) // 21
console.log(get({ a: { b: [21] } }, 'a.b[0]')) // 21
console.log(get([21, 'twenty one'], '[1]')) // 'twenty one'

console.log(get(21, 'toString')) // return toString function from provided number
console.log(get(' twenty one ', 'trim')) // return trim function from provided string

console.log(get({ a: { b: 21 } }, 'a.c')) // undefined
// or it can return a default value if do not find anything
console.log(get({ a: 21 }, 'a.b', 'twenty one')) // 'twenty one'
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/sagittarius-get@latest/build/index.js"></script>
<script>
  console.log(sagittariusGet({ a: { b: 21 } }, 'a.b')) // 21
  console.log(sagittariusGet({ a: { b: [21] } }, 'a.b[0]')) // 21
  console.log(sagittariusGet([21, 'twenty one'], '[1]')) // 'twenty one'

  console.log(sagittariusGet(21, 'toString')) // return toString function from provided number
  console.log(sagittariusGet(' twenty one ', 'trim')) // return trim function from provided string

  console.log(sagittariusGet({ a: { b: 21 } }, 'a.c')) // undefined
  // or it can return a default value if do not find anything
  console.log(sagittariusGet({ a: 21 }, 'a.b', 'twenty one')) // 'twenty one'
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
