---
id: doc-api-sagittarius-get
title: get
sidebar_label: get
---

Gets the value at path of provided argument. If the resolved value is undefined, the defaultValue is returned in its place.

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
