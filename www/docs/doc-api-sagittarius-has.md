---
id: doc-api-sagittarius-has
title: has
sidebar_label: has
---

Checks if path is a direct property of provided argument.

- It can be used directly from `sagittarius-core` package or installed separately via npm runing: `npm i sagittarius-has`

```js
const has = require('sagittarius-has')
console.log(has({ a: { b: 21 } }, 'a.b')) // true
console.log(has({ a: { b: [21] } }, 'a.b[0]')) // true
console.log(has([21, 'twenty one'], '[1]')) // true
console.log(has([{ a: [21] }, 21], '[0].a[0]')) // true

console.log(has(21, 'toString')) // true
console.log(has(' twenty one ', 'trim')) // true

console.log(has({ a: { c: 21 } }, 'a.b')) // false
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/sagittarius-has@latest/build/index.js"></script>
<script>
  console.log(sagittariusHas({ a: { b: 21 } }, 'a.b')) // true
  console.log(sagittariusHas({ a: { b: [21] } }, 'a.b[0]')) // true
  console.log(sagittariusHas([21, 'twenty one'], '[1]')) // true
  console.log(sagittariusHas([{ a: [21] }, 21], '[0].a[0]')) // true

  console.log(sagittariusHas(21, 'toString')) // true
  console.log(sagittariusHas(' twenty one ', 'trim')) // true

  console.log(sagittariusHas({ a: { c: 21 } }, 'a.b')) // false
</script>
```
