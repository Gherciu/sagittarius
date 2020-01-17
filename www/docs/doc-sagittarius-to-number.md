---
id: doc-sagittarius-to-number
title: toNumber
sidebar_label: toNumber
---

Transform provided argument to number.

- It can be used directly from `sagittarius-core` package or installed separately via npm runing: `npm i sagittarius-to-number`

```js
const toNumber = require('sagittarius-to-number')
console.log(toNumber('21')) // 21
console.log(toNumber(null)) // 0
console.log(toNumber('0.21')) // 0.21
console.log(toNumber('21px')) // 21
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/sagittarius-to-number@latest/build/index.js"></script>
<script>
  console.log(sagittariusToNumber('21')) // from string to number 21
  console.log(sagittariusToNumber(null)) // 0
  console.log(sagittariusToNumber('0.21')) // 0.21
  console.log(sagittariusToNumber('21px')) // 21
</script>
```
