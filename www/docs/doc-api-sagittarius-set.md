---
id: doc-api-sagittarius-set
title: set
sidebar_label: set
---

Sets the value at path of provided argument. If a portion of path doesn't exist, it's created. Return true or false if value is set with success.

- It can be used directly from `sagittarius-core` package or installed separately via npm runing: `npm i sagittarius-set`

```js
const set = require('sagittarius-set')
const obj = { a: 21, b: {} }

console.log(set(obj, 'a', 'twenty one')) // true
console.log(obj.a) // 'twenty one'

console.log(set(obj, 'b.a.b', 21)) // true
console.log(obj.b.a.b) // 21
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/sagittarius-set@latest/build/index.js"></script>
<script>
  const obj = { a: 21, b: {} }

  console.log(sagittariusSet(obj, 'a', 'twenty one')) // true
  console.log(obj.a) // 'twenty one'

  console.log(sagittariusSet(obj, 'b.a.b', 21)) // true
  console.log(obj.b.a.b) // 21
</script>
```
