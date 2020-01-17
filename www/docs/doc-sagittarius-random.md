---
id: doc-sagittarius-random
title: random
sidebar_label: random
---

Random number generation from range.

- It can be used directly from `sagittarius-core` package or installed separately via npm runing: `npm i sagittarius-random`

```js
const random = require('sagittarius-random')
console.log(random(12, 21))
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/sagittarius-random@latest/build/index.js"></script>
<script>
  console.log(sagittariusRandom(12, 21))
</script>
```
