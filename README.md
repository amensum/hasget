# hasget
[![version](https://img.shields.io/npm/v/hasget.svg?style=flat-square&logo=npm)](https://npmjs.com/package/hasget)
[![size](https://img.shields.io/bundlephobia/min/hasget.svg?style=flat-square&logo=npm)](https://npmjs.com/package/hasget)
[![license](https://img.shields.io/npm/l/hasget.svg?style=flat-square&logo=npm)](https://npmjs.com/package/hasget)
[![downloads](https://img.shields.io/npm/dm/hasget.svg?style=flat-square&logo=npm)](https://npmjs.com/package/hasget)

By this library you easy can:
- Check if the specified nested property of object exists as a direct property of object;
- Get the specified nested property of object as a direct property of object;

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
const obj = { user: { firstname: 'Nik', lastname: null } };

has(obj, 'user'); // true
get(obj, 'user'); // { firstname: 'Nik', lastname: null }

has(obj, 'user.firstname'); // true
get(obj, 'user.firstname'); // 'Nik'

has(obj, 'user.lastname'); // true
get(obj, 'user.lastname'); // null

has(obj, 'user.birthdate'); // false
get(obj, 'user.birthdate'); // undefined

has(obj, 'user.birthdate.year'); // false
get(obj, 'user.birthdate.year'); // undefined
```
