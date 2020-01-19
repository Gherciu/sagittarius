---
id: doc-introduction
title: Introduction
sidebar_label: Introduction
---

Sagittarius is a set of javascript most used utils. It provides a core package named `sagittarius-core` that contain all utils. It has also the posibility to install each package separately to use only needed packages.

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
