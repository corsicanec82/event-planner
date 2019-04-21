"use strict";

var hello = function hello() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'n/a';
  var result = "Hello ".concat(name);
  return result;
};

console.log(hello('User'));