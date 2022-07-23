"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Ship = /*#__PURE__*/function () {
  function Ship(size, direction) {
    _classCallCheck(this, Ship);

    _defineProperty(this, "size", null);

    _defineProperty(this, "direction", null);

    _defineProperty(this, "killed", false);

    _defineProperty(this, "x", null);

    _defineProperty(this, "y", null);

    this.size = size;
    this.direction = direction;
  }

  _createClass(Ship, [{
    key: "placed",
    get: function get() {
      return this.x !== null && this.y !== null;
    }
  }]);

  return Ship;
}();