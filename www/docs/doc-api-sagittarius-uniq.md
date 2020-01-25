---
id: doc-api-sagittarius-uniq
title: uniq
sidebar_label: uniq
---

Filter and return uniq values from an array.

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
