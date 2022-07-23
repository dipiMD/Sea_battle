"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ShipView = /*#__PURE__*/function (_Ship) {
  _inherits(ShipView, _Ship);

  var _super = _createSuper(ShipView);

  function ShipView(size, direction, startX, startY) {
    var _this;

    _classCallCheck(this, ShipView);

    _this = _super.call(this, size, direction);

    _defineProperty(_assertThisInitialized(_this), "div", null);

    _defineProperty(_assertThisInitialized(_this), "startX", null);

    _defineProperty(_assertThisInitialized(_this), "startY", null);

    var div = document.createElement("div");
    div.classList.add("ship");
    Object.assign(_assertThisInitialized(_this), {
      div: div,
      startX: startX,
      startY: startY
    });

    _this.setDirection(direction, true);

    return _this;
  }

  _createClass(ShipView, [{
    key: "setDirection",
    value: function setDirection(newDirection) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!force && this.direction === newDirection) {
        return false;
      }

      this.div.classList.remove("ship-".concat(this.direction, "-").concat(this.size));
      this.direction = newDirection;
      this.div.classList.add("ship-".concat(this.direction, "-").concat(this.size));
      return true;
    }
  }, {
    key: "toggleDirection",
    value: function toggleDirection() {
      var newDirection = this.direction === "row" ? "column" : "row";
      this.setDirection(newDirection);
    }
  }, {
    key: "isUnder",
    value: function isUnder(point) {
      return isUnderPoint(point, this.div);
    }
  }]);

  return ShipView;
}(Ship);