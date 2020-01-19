---
id: doc-api-sagittarius-debounce
title: debounce
sidebar_label: debounce
---

Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed since the last time the debounced function was invoked.

- It can be used directly from `sagittarius-core` package or installed separately via npm runing: `npm i sagittarius-debounce`

```js
const debounce = require('sagittarius-debounce')

// Avoid costly calculations while the window size is in flux.
const calculateLayout = debounce(myFunctionToDebounce, 150)
window.addEventListener('resize', calculateLayout)

// Remove listener
calculateLayout.cancel()
window.removeEventListener('resize', calculateLayout)
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/sagittarius-debounce@latest/build/index.js"></script>
<script>
  // Avoid costly calculations while the window size is in flux.
  const calculateLayout = debounce(myFunctionToDebounce, 150)
  window.addEventListener('resize', calculateLayout)

  // Remove listener
  calculateLayout.cancel()
  window.removeEventListener('resize', calculateLayout)
</script>
```
