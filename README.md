# numer.js

Numer.js is an open-source JavaScript library for formatting and manipulating numbers.

[![NPM](https://img.shields.io/npm/v/numer.js.svg)](https://www.npmjs.com/package/numer.js) ![npm bundle size](https://img.shields.io/bundlephobia/min/numer.js) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 🎁 Features

* Numer() constructor
  * format() instance method

## 🔧 Install

numer.js is available on npm. It can be installed with the following command:

```
npm install numer.js --save
```

numer.js is available on yarn as well. It can be installed with the following command:

```
yarn add numer.js --save
```

If you don't want to use npm or yarn, [numer.min.js](https://unpkg.com/numer.js@0.1.0/numer.min.js) can be downloaded to your project source.

## 📖 Documentation

### Constructor

* Numer(options)
  * Creates a new Numer object.

```js
new Numer(options)
```

#### Parameters

* options
  * An object with some or all of the following properties.

#### style

The formatting style to use.

* comma for comma formatting.
* abbreviation for abbreviation formatting.
* ordinal for ordinal formatting.

### Instance methods

* Numer.prototype.format(number)
  * Getter function that formats a number according to the formatting options of this Numer object.

```js
format(number)
```

#### Parameters

* number
  * A Number or BigInt to format.

## 💡 Usage

### 🎀 format()

```js
// Node.js
const Numer = require("numer.js");

console.log(new Numer({ style: 'comma' }).format(1000000));
// expected output: "1,000,000"

console.log(new Numer({ style: 'abbreviation' }).format(9812730));
// expected output: "9.8M"

console.log(new Numer({ style: 'ordinal' }).format(1));
// expected output: "1st"
```

## 📜 Changelog

Latest version 0.1.0 (2021-09-07):

  * Numer() constructor
    * format() instance method

Details changes for each release are documented in the [CHANGELOG.md](https://github.com/Bunlong/numer.js/blob/master/CHANGELOG.md).

## ❗ Issues

If you think any of the `numer.js` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 💪 Contribution

We'd love to have your helping hand on contributions to `numer.js` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## 🏆 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Bunlong">
        <img src="https://avatars0.githubusercontent.com/u/1308397?s=400&u=945dc6b97571e2b98b659d34b1c81ae2514046bf&v=4" width="100" alt="Bunlong" />
        <br />
        <sub>
          <b>Bunlong</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
