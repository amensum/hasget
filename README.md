# hasget
[![version](https://img.shields.io/npm/v/hasget.svg?style=flat-square&logo=npm)](https://npmjs.com/package/hasget)
[![size](https://img.shields.io/bundlephobia/min/hasget.svg?style=flat-square&logo=npm)](https://npmjs.com/package/hasget)
[![license](https://img.shields.io/npm/l/hasget.svg?style=flat-square&logo=npm)](https://npmjs.com/package/hasget)
[![downloads](https://img.shields.io/npm/dm/hasget.svg?style=flat-square&logo=npm)](https://npmjs.com/package/hasget)

## Installing
Using npm:
```bash
$ npm install hasget
```

Using jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/hasget/dist/hasget.min.js"></script>
```

Using unpkg CDN:
```html
<script src="https://unpkg.com/hasget/dist/hasget.min.js"></script>
```

## Usage
Import (module):
```js
import { has, get } from 'hasget';
```

Import (global):
```js
const { has, get } = hasget;
```

Example:
```js
const obj = { el: { text: 'hello' } };

has(obj, 'el'); // true
get(obj, 'el'); // { text: 'hello' }

has(obj, 'el.text'); // true
get(obj, 'el.text'); // 'hello'

has(obj, 'el.url'); // false
get(obj, 'el.url'); // undefined

has(obj, 'el.size.width'); // false
get(obj, 'el.size.heigth'); // undefined
```
