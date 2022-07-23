"use strict";

function getRandomBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getRandomFrom() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var index = Math.floor(Math.random() * args.length);
  return args[index];
}

function isUnderPoint(point, element) {
  var _element$getBoundingC = element.getBoundingClientRect(),
      left = _element$getBoundingC.left,
      top = _element$getBoundingC.top,
      width = _element$getBoundingC.width,
      height = _element$getBoundingC.height;

  var x = point.x,
      y = point.y;
  return left <= x && x <= left + width && top <= y && y <= top + height;
}

function getRandomSeveral() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  array = array.slice();

  if (size > array.length) {
    size = array.length;
  }

  var result = [];

  while (result.length < size) {
    var index = Math.floor(Math.random() * array.length);
    var item = array.splice(index, 1)[0];
    result.push(item);
  }

  return result;
}