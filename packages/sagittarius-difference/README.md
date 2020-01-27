<div align="center">
  <img width="200" height="200"
    src="https://raw.githubusercontent.com/Gherciu/sagittarius/master/logo.png">
  <h1>sagittarius-difference</h1>
  <p>Compare 2 arguments and return the difference. The order and references of result values are determined by the first argument. Part of <a href="https://github.com/Gherciu/sagittarius">sagittarius</a> a set of javascript most used utils.</p>
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

- It can be used directly from `sagittarius-core` package or installed separately via npm runing: `npm i sagittarius-difference`

```js
const difference = require('sagittarius-difference')
console.log(difference([21, 1997], [21, 2020])) // [1997]
console.log(difference({ a: 21, b: 1997 }, { a: 21, b: 2020 })) // {b: 1997}
console.log(difference('twenty one years', 'twenty one')) // ' years'
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/sagittarius-difference@latest/build/index.js"></script>
<script>
  console.log(sagittariusDifference([21, 1997], [21, 2020])) // [1997]
  console.log(sagittariusDifference({ a: 21, b: 1997 }, { a: 21, b: 2020 })) // {b: 1997}
  console.log(sagittariusDifference('twenty one years', 'twenty one')) // ' years'
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
