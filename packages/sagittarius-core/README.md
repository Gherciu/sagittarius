<div align="center">
  <img width="200" height="200"
    src="https://raw.githubusercontent.com/Gherciu/sagittarius/master/logo.png">
  <h1>sagittarius</h1>
  <p>A set of javascript most used utils.</p>
</div>

![GitHub](https://img.shields.io/github/license/Gherciu/sagittarius)

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

- [random](https://github.com/Gherciu/sagittarius/packages/sagittarius-random): Random number generation from range

<details>
  <summary>Example</summary>
  <pre>
    const { random } = require('sagittarius-core')
    // OR const random =  require('sagittarius-random')

    console.log(random(12, 21))
    // a random number between 12 and 21

  </pre>
</details>

#### Data validation

- [isEmpty](https://github.com/Gherciu/sagittarius/packages/sagittarius-is-empty): Check if provided argument is empty

<details>
  <summary>Example</summary>
  <pre>
    const { isEmpty } = require('sagittarius-core')
    // OR const isEmpty =  require('sagittarius-is-empty')

    console.log(isEmpty({})) // true
    console.log(isEmpty({ a: 1 })) // false

  </pre>
</details>

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
