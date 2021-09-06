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
    format: function (number, decPlaces) {
      var { style } = this._input;
      var _number = number;
      var _decPlaces = decPlaces;
      switch(style) {
        case 'comma':
          return addCommas(_number);
        case 'abbreviation':
          return abbreviate(_number, _decPlaces)
        case 'ordinal':
            return convertToOrdinal(_number)
        default:
          throw 'The formatting style to use are comma, abbreviation and ordinal.';
      }
    }
  };

  function addCommas(_number) {
    return _number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function abbreviate(_number, _decPlaces) {
    // 2 decimal places => 100, 3 decimal places => 1000, ... etc.
    _decPlaces = Math.pow(10, _decPlaces);

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
        _number = Math.round((_number * _decPlaces) / size) / _decPlaces;

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
    var _j = _number % 10;
    var  _k = _number % 100;
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
