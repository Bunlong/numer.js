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
})(this, function() { 'use strict';
  var global = (function() {
    // alternative method, similar to `Function('return this')()`
    // but without using `eval` (which is disabled when
    // using Content Security Policy).

    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }

    // When running tests none of the above have been defined
    return {};
  })();

  var Numer = {};

  Numer.numberWithCommas = numberWithCommas;
  Numer.compactNumber = compactNumber;
  Numer.ordinalSuffix = ordinalSuffix;
  Numer.getRandomInt = getRandomInt;

  function numberWithCommas(_number) {
    return _number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function compactNumber(_number) {
    var newValue = _number;
    if (_number >= 1000) {
      var suffixes = ['', 'k', 'm', 'b', 't'];
      var suffixNum = Math.floor(('' + _number).length / 3);
      var shortValue = '';
      for (var precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat(
          (suffixNum != 0
            ? _number / Math.pow(1000, suffixNum)
            : _number
          ).toPrecision(precision)
        );
        var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
        if (dotLessShortValue.length <= 2) {
          break;
        }
      }
      if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
      newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
  }

  function ordinalSuffix(_number) {
    var j = _number % 10;
    var  k = _number % 100;
    if (j === 1 && k !== 11) {
      return _number + 'st';
    }
    if (j === 2 && k !== 12) {
      return _number + 'nd';
    }
    if (j === 3 && k !== 13) {
      return _number + 'rd';
    }
    return _number + 'th';
  }

  function getRandomInt(_min, _max) {
    var min = Math.ceil(_min);
    var max = Math.floor(_max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return Numer;
});