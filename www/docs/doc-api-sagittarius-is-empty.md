---
id: doc-api-sagittarius-is-empty
title: isEmpty
sidebar_label: isEmpty
---

Check if provided argument is empty.

- It can be used directly from `sagittarius-core` package or installed separately via npm runing: `npm i sagittarius-is-empty`

```js
const isEmpty = require('sagittarius-is-empty')
console.log(isEmpty({})) // true
console.log(isEmpty({ a: 21 })) // false
console.log(isEmpty([])) // true
console.log(isEmpty([21])) // false
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/sagittarius-is-empty@latest/build/index.js"></script>
<script>
  console.log(sagittariusIsEmpty({})) // true
  console.log(sagittariusIsEmpty({ a: 21 })) // false
  console.log(sagittariusIsEmpty([])) // true
  console.log(sagittariusIsEmpty([21])) // false
</script>
```
