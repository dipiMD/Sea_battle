"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Mouse = /*#__PURE__*/function () {
  function Mouse(element) {
    var _this = this;

    _classCallCheck(this, Mouse);

    _defineProperty(this, "element", null);

    _defineProperty(this, "under", false);

    _defineProperty(this, "pUnder", false);

    _defineProperty(this, "x", null);

    _defineProperty(this, "y", null);

    _defineProperty(this, "pX", null);

    _defineProperty(this, "pY", null);

    _defineProperty(this, "left", false);

    _defineProperty(this, "pLeft", false);

    _defineProperty(this, "delta", 0);

    _defineProperty(this, "pDelta", 0);

    this.element = element;

    var update = function update(e) {
      _this.x = e.clientX;
      _this.y = e.clientY;
      _this.delta = 0;
      _this.under = true;
    };

    element.addEventListener("mousemove", function (e) {
      _this.tick();

      update(e);
    });
    element.addEventListener("mouseenter", function (e) {
      _this.tick();

      update(e);
    });
    element.addEventListener("mouseleave", function (e) {
      _this.tick();

      update(e);
      _this.under = false;
    });
    element.addEventListener("mousedown", function (e) {
      _this.tick();

      update(e);

      if (e.button === 0) {
        _this.left = true;
      }
    });
    element.addEventListener("mouseup", function (e) {
      _this.tick();

      update(e);

      if (e.button === 0) {
        _this.left = false;
      }
    });
    element.addEventListener("wheel", function (e) {
      _this.tick();

      _this.x = e.clientX;
      _this.y = e.clientY;
      _this.delta = e.deltaY > 0 ? 1 : -1;
      _this.under = true;
    });
  }

  _createClass(Mouse, [{
    key: "tick",
    value: function tick() {
      this.pX = this.x;
      this.pY = this.y;
      this.pUnder = this.under;
      this.pLeft = this.left;
      this.pDelta = this.delta;
      this.delta = 0;
    }
  }]);

  return Mouse;
}();