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
    root.NumericFormat = factory();
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

  var NumericFormat = {};

  NumericFormat.numberWithCommas = numberWithCommas;
  NumericFormat.compactNumber = compactNumber;
  NumericFormat.ordinalSuffix = ordinalSuffix;
  NumericFormat.getRandomInt = getRandomInt;

  function numberWithCommas(_number) {
    return _number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function compactNumber(_number) {
    var suffixes = ['', 'k', 'm', 'b', 't'];
    var suffixNum = Math.floor(('' + _number).length / 3);
    var shortValue = parseFloat(
      (suffixNum !== 0 ? _number / Math.pow(1000, suffixNum) : _number).toPrecision(2)
    );
    if (shortValue % 1 !== 0) {
      shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum];
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

  return NumericFormat;
});
