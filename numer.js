/* @license
numer.js
v0.1.0
https://github.com/bunlong/numer.js
License: MIT
*/

(function(root, factory) {
  /* globals define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && typeof exports !== 'undefined') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.Numer = factory();
  }
})(this, function() {
  'use strict';

  function Numer(input) {
    this._input = input;
  }

  Numer.prototype = {
    format: function(number) {
      var _input = this._input;
      var _number = number;
      switch (_input.style) {
        case 'comma':
          return addCommas(_number);
        case 'abbreviation':
          return abbreviate(_number);
        case 'ordinal':
          return convertToOrdinal(_number);
        default:
          throw new Error(
            'The formatting style to use: comma, abbreviation and ordinal.'
          );
      }
    },
  };

  function addCommas(_number) {
    return _number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function abbreviate(_value) {
    var _newValue = _value;
    if (_value >= 1000) {
      var _suffixes = ['', 'K', 'M', 'B', 'T'];
      var _suffixNum = Math.floor(('' + _value).length / 3);
      var _shortValue = '';
      for (var precision = 2; precision >= 1; precision--) {
        _shortValue = parseFloat(
          (_suffixNum !== 0
            ? _value / Math.pow(1000, _suffixNum)
            : _value
          ).toPrecision(precision)
        );
        var dotLessShortValue = (_shortValue + '').replace(
          /[^a-zA-Z 0-9]+/g,
          ''
        );
        if (dotLessShortValue.length <= 2) {
          break;
        }
      }
      if (_shortValue % 1 !== 0) _shortValue = _shortValue.toFixed(1);
      _newValue = _shortValue + _suffixes[_suffixNum];
    }
    return _newValue;
  }

  function convertToOrdinal(_number) {
    var _j = _number % 10;
    var _k = _number % 100;
    if (_j === 1 && _k !== 11) {
      return _number + 'st';
    }
    if (_j === 2 && _k !== 12) {
      return _number + 'nd';
    }
    if (_j === 3 && _k !== 13) {
      return _number + 'rd';
    }
    return _number + 'th';
  }

  return Numer;
});
