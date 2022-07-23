"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BattlefieldView = /*#__PURE__*/function (_Battlefield) {
  _inherits(BattlefieldView, _Battlefield);

  var _super = _createSuper(BattlefieldView);

  function BattlefieldView() {
    var _this;

    var showShips = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, BattlefieldView);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "root", null);

    _defineProperty(_assertThisInitialized(_this), "table", null);

    _defineProperty(_assertThisInitialized(_this), "dock", null);

    _defineProperty(_assertThisInitialized(_this), "polygon", null);

    _defineProperty(_assertThisInitialized(_this), "showShips", true);

    _defineProperty(_assertThisInitialized(_this), "cells", []);

    var root = document.createElement("div");
    root.classList.add("battlefield");
    var table = document.createElement("table");
    table.classList.add("battlefield-table");
    var dock = document.createElement("div");
    dock.classList.add("battlefield-dock");
    var polygon = document.createElement("div");
    polygon.classList.add("battlefield-polygon");
    Object.assign(_assertThisInitialized(_this), {
      root: root,
      table: table,
      dock: dock,
      polygon: polygon,
      showShips: showShips
    });
    root.append(table, dock, polygon);

    for (var y = 0; y < 10; y++) {
      var row = [];
      var tr = document.createElement("tr");
      tr.classList.add("battlefield-row");
      tr.dataset.y = y;

      for (var x = 0; x < 10; x++) {
        var td = document.createElement("td");
        td.classList.add("battlefield-item");
        Object.assign(td.dataset, {
          x: x,
          y: y
        });
        tr.append(td);
        row.push(td);
      }

      table.append(tr);

      _this.cells.push(row);
    }

    for (var _x = 0; _x < 10; _x++) {
      var cell = _this.cells[0][_x];
      var marker = document.createElement("div");
      marker.classList.add("marker", "marker-column");
      marker.textContent = "ABCDEFGHIK"[_x];
      cell.append(marker);
    }

    for (var _y = 0; _y < 10; _y++) {
      var _cell = _this.cells[_y][0];

      var _marker = document.createElement("div");

      _marker.classList.add("marker", "marker-row");

      _marker.textContent = _y + 1;

      _cell.append(_marker);
    }

    return _this;
  }

  _createClass(BattlefieldView, [{
    key: "addShot",
    value: function addShot(shot) {
      if (!_get(_getPrototypeOf(BattlefieldView.prototype), "addShot", this).call(this, shot)) {
        return false;
      }

      this.polygon.append(shot.div);
      var cell = this.cells[shot.y][shot.x];
      var cellRect = cell.getBoundingClientRect();
      var rootRect = this.root.getBoundingClientRect();
      shot.div.style.left = "".concat(cellRect.left - rootRect.left, "px");
      shot.div.style.top = "".concat(cellRect.top - rootRect.top, "px");
      return true;
    }
  }, {
    key: "addShip",
    value: function addShip(ship, x, y) {
      if (!_get(_getPrototypeOf(BattlefieldView.prototype), "addShip", this).call(this, ship, x, y)) {
        return false;
      }

      if (this.showShips) {
        this.dock.append(ship.div);

        if (ship.placed) {
          var cell = this.cells[y][x];
          var cellRect = cell.getBoundingClientRect();
          var rootRect = this.root.getBoundingClientRect();
          ship.div.style.left = "".concat(cellRect.left - rootRect.left, "px");
          ship.div.style.top = "".concat(cellRect.top - rootRect.top, "px");
        } else {
          ship.setDirection("row");
          ship.div.style.left = "".concat(ship.startX, "px");
          ship.div.style.top = "".concat(ship.startY, "px");
        }
      }

      return true;
    }
  }, {
    key: "removeShip",
    value: function removeShip(ship) {
      if (!_get(_getPrototypeOf(BattlefieldView.prototype), "removeShip", this).call(this, ship)) {
        return false;
      }

      if (Array.prototype.includes.call(this.dock.children, ship.div)) {
        ship.div.remove();
      }

      return true;
    }
  }, {
    key: "removeShot",
    value: function removeShot(shot) {
      if (!_get(_getPrototypeOf(BattlefieldView.prototype), "removeShot", this).call(this, shot)) {
        return false;
      }

      if (Array.prototype.includes.call(this.polygon.children, shot.div)) {
        shot.div.remove();
      }

      return true;
    }
  }, {
    key: "isUnder",
    value: function isUnder(point) {
      return isUnderPoint(point, this.root);
    }
  }]);

  return BattlefieldView;
}(Battlefield);