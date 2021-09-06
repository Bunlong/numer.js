# numer.js

Convert a number inputted into the different formats with numer.js.

## 🎁 Features

* Numer(options) constructor
  * format() Getter function that formats a number according to the formatting options of this Numer object.

## 🔧 Install

numer.js is available on npm. It can be installed with the following command:

```
npm install numer.js --save
```

numer.js is available on yarn as well. It can be installed with the following command:

```
yarn add numer.js --save
```

## 💡 Usage

### 🎀 addCommas(number)

Readable number formatting.

```js
const value = addCommas(22200000);

// => 22,200,000
```

### 🎀 abbreviate(number, decimalPlaces)

Abbreviate number formatting.

```js
const value = abbreviate(22200000, 2);

// => 22m
```

### 🎀 convertToOrdinal(number)

Format rankings or positions.

```js
const ranking = convertToOrdinal(1);

// => 1st
```

### 🎀 randomInt

Show a CTA in random positions.

```js
const indexToAppear = randomInt(0, array.length);
```

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
