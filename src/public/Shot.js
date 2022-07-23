"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Shot = /*#__PURE__*/function () {
  function Shot(x, y) {
    var variant = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "miss";

    _classCallCheck(this, Shot);

    _defineProperty(this, "x", null);

    _defineProperty(this, "y", null);

    _defineProperty(this, "variant", null);

    Object.assign(this, {
      x: x,
      y: y,
      variant: variant
    });
  }

  _createClass(Shot, [{
    key: "setVariant",
    value: function setVariant(variant) {
      this.variant = variant;
    }
  }]);

  return Shot;
}();