'use strict';

var flatten;

if (Array.prototype.reduce) {
  flatten = function() {
    return [].slice.call(arguments).reduce(function(a, b) {
      return a.concat(Array.isArray(b) ? flatten.apply(null, b) : b);
    }, []);
  }
} else {
  flatten = function() {
    var result = [];
    var args = [].slice.call(arguments);

    _flatten(args);

    function _flatten(arr) {
      for (var i = 0, len = arr.length; i < len; i++) {
        var v = arr[i];
        var t = Object.prototype.toString.call(v);
        if (t === '[object Array]') {
          _flatten(v);
        } else {
          result.push(v);
        }
      }
    }

    return result;

  }
}

module.exports = flatten;
