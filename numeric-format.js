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

  function numberWithCommas(_number) {
    return _number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return NumericFormat;
});
