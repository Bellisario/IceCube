<!-- cspell:word vexels -->

<p align="center"><img src="https://github.com/Bellisario/IceCube/blob/main/assets/Ice%20Cube.svg" alt="Ice Cube" width="150" height="150" /></p>
<p></p>
<h1 align="center">Ice Cube</h1>

[![CI](https://github.com/Bellisario/IceCube/actions/workflows/ci.yml/badge.svg)](https://github.com/Bellisario/IceCube/actions/workflows/ci.yml) [![NPM](https://img.shields.io/npm/v/@bellisario/icecube)](https://www.npmjs.com/package/@bellisario/icecube) ![Node.js Version](https://img.shields.io/node/v/@bellisario/icecube) [![License](https://img.shields.io/npm/l/@bellisario/icecube)](https://github.com/Bellisario/IceCube/blob/main/LICENSE)

> Create objects that can be freezed and un-freezed

## Installation

```bash
npm i @bellisario/icecube
```

## Example

```js
import { IceCube } from '@bellisario/icecube';
const obj = new IceCube({ test: true });

obj.test; // returns true
obj.test = false; // throws an error

obj.iced = false; // disables freezing
obj.test = false; // succeeds
obj.test; // false
```

## Usage

### new IceCube(obj, options?)

Creates a new instance of the `IceCube` class.\
Returns an usable object that can be freezed/un-freezed.

#### obj

Type: `object`\
The object to be freezed. Can also be an array.

#### options

Type: `object`\
Required: `false`\
Initialization options.

##### iced

Type: `boolean`\
Default: `true`\
If `true`, the object will be freezed when created.\
If `false`, the object will not be freezed when created and can be edited.

#### Object returned

Type: `object`\
The object that can be freezed/un-freezed.

##### Properties
- **iced**: `boolean`\
  Default: specified by the user `iced` option\
  Controls whether or not the object is frozen.\
  Edit this property to freeze/un-freeze the object.

## Why?

Since I started learning JavaScript, I noticed that freezing objects will not allow you to un-freeze them later, this is very useful in certain situations, but some others you just want to prevent the user from editing the object now, but allow them to edit it later...\
So I created this library to solve this problem.

## How?

You can see on the source code of the library that I used Proxy to "watch" the object, then allow editing (or throw an error) by looking for the `iced` property (which is instead always editable).

## Contributing

We :heart: contributions!\
Feel free to open an [issue](https://github.com/Bellisario/IceCube/issues) or a [pull request](https://github.com/Bellisario/IceCube/pulls) but follow [Contributing Guidelines](https://github.com/Bellisario/ice-cube/blob/main/CONTRIBUTING.md).

> **Tip:** if you don't know where to start, check out the [help wanted issues](https://github.com/Bellisario/IceCube/labels/help%20wanted)!

## License
MIT License [here](https://github.com/Bellisario/IceCube/blob/main/LICENSE).

---

<p align="center">Ice Cube original image from <a target="_blank" href="https://www.vexels.com/png-svg/preview/232100/ice-cube-melting-illustration">vexels.com</a></p>
