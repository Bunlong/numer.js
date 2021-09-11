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
})(this, function() { 'use strict';
  var Numer = {};

  Numer.addCommas = addCommas;
  Numer.abbreviate = abbreviate;
  Numer.convertToOrdinal = convertToOrdinal;
  Numer.randomInt = randomInt;

  function addCommas(_number) {
    return _number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function abbreviate(_number, decPlaces) {
    // 2 decimal places => 100, 3 decimal places => 1000, ... etc.
    decPlaces = Math.pow(10, decPlaces);

    // Enumerate number abbreviations.
    var abbrev = ['k', 'm', 'b', 't'];

    // Go through the array backwards, so we do the largest first.
    for (var i = abbrev.length - 1; i >= 0; i--) {
      // Convert array index to '1000', '1000000', ... etc.
      var size = Math.pow(10, (i + 1) * 3);

      // If the number is bigger or equal do the abbreviation
      if (size <= _number) {
        // We multiply by decPlaces, round, and then divide by decPlaces.
        // This gives us nice rounding to a particular decimal place.
        _number = Math.round((_number * decPlaces) / size) / decPlaces;

        // Handle special case where we round up to the next abbreviation
        if (_number === 1000 && i < abbrev.length - 1) {
          _number = 1;
          i++;
        }

        // Add the letter for the abbreviation.
        _number += abbrev[i];

        // We are done... stop.
        break;
      }
    }

    return _number;
  }

  function convertToOrdinal(_number) {
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

  function randomInt(_min, _max) {
    var min = Math.ceil(_min);
    var max = Math.floor(_max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return Numer;
});
