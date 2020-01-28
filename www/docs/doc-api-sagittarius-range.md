---
id: doc-api-sagittarius-range
title: range
sidebar_label: range
---

Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.

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
