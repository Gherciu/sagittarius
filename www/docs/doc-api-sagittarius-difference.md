---
id: doc-api-sagittarius-difference
title: difference
sidebar_label: difference
---

Compare 2 arguments and return the difference. The order and references of result values are determined by the first argument.

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
