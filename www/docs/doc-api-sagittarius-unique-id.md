---
id: doc-api-sagittarius-unique-id
title: uniqueId
sidebar_label: uniqueId
---

Generates a unique ID.

- It can be used directly from `sagittarius-core` package or installed separately via npm runing: `npm i sagittarius-unique-id`

```js
const uniqueId = require('sagittarius-unique-id')
console.log(uniqueId()) // 1
console.log(uniqueId('my_prefix_')) // my_prefix_1
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/sagittarius-unique-id@latest/build/index.js"></script>
<script>
  console.log(sagittariusUniqueId()) // 1
  console.log(sagittariusUniqueId('my_prefix_')) // my_prefix_1
</script>
```
