'use strict';
var test = require('ava');
var flatten = require('./');

test(function (t) {
  t.assert(flatten(1, [2, 3], 4, 5, [6, [7]]).toString() == '1,2,3,4,5,6,7');
});
