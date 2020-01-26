---
id: doc-api-sagittarius-to-path
title: toPath
sidebar_label: toPath
---

Transform provided argument to a property path array.

- It can be used directly from `sagittarius-core` package or installed separately via npm runing: `npm i sagittarius-to-path`

```js
const toPath = require('sagittarius-to-path')
console.log(toPath('a.b.c')) // ['a', 'b', 'c']
console.log(toPath('a[0].b.c')) // ['a', 0, 'b', 'c']
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/sagittarius-to-path@latest/build/index.js"></script>
<script>
  console.log(sagittariusToPath('a.b.c')) // ['a', 'b', 'c']
  console.log(sagittariusToPath('a[0].b.c')) // ['a', 0, 'b', 'c']
</script>
```
