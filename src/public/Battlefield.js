"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _matrix = /*#__PURE__*/new WeakMap();

var _changed = /*#__PURE__*/new WeakMap();

var Battlefield = /*#__PURE__*/function () {
  function Battlefield() {
    _classCallCheck(this, Battlefield);

    _defineProperty(this, "ships", []);

    _defineProperty(this, "shots", []);

    _classPrivateFieldInitSpec(this, _matrix, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _changed, {
      writable: true,
      value: true
    });
  }

  _createClass(Battlefield, [{
    key: "loser",
    get: function get() {
      var _iterator = _createForOfIteratorHelper(this.ships),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ship = _step.value;

          if (!ship.killed) {
            return false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return true;
    }
  }, {
    key: "matrix",
    get: function get() {
      if (_classPrivateFieldGet(this, _changed) == false) _classPrivateFieldGet(this, _matrix);
      var matrix = [];

      for (var y = 0; y < 10; y++) {
        var row = [];

        for (var x = 0; x < 10; x++) {
          var item = {
            x: x,
            y: y,
            ship: null,
            free: true,
            shoted: false,
            wounded: false
          };
          row.push(item);
        }

        matrix.push(row);
      }

      var _iterator2 = _createForOfIteratorHelper(this.ships),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ship = _step2.value;

          if (!ship.placed) {
            continue;
          }

          var _x = ship.x,
              _y = ship.y;
          var dx = ship.direction === "row";
          var dy = ship.direction === "column";

          for (var i = 0; i < ship.size; i++) {
            var cx = _x + dx * i;
            var cy = _y + dy * i;
            var _item = matrix[cy][cx];
            _item.ship = ship;
          }

          for (var _y2 = ship.y - 1; _y2 < ship.y + ship.size * dy + dx + 1; _y2++) {
            for (var _x2 = ship.x - 1; _x2 < ship.x + ship.size * dx + dy + 1; _x2++) {
              if (this.inField(_x2, _y2)) {
                var _item2 = matrix[_y2][_x2];
                _item2.free = false;
              }
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(this.shots),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _step3.value,
              _x3 = _step3$value.x,
              _y3 = _step3$value.y;
          var _item3 = matrix[_y3][_x3];
          _item3.shoted = true;

          if (_item3.ship) {
            _item3.wounded = true;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      _classPrivateFieldSet(this, _matrix, matrix);

      _classPrivateFieldSet(this, _changed, false);

      return _classPrivateFieldGet(this, _matrix);
    }
  }, {
    key: "complete",
    get: function get() {
      if (this.ships.length !== 10) {
        return false;
      }

      var _iterator4 = _createForOfIteratorHelper(this.ships),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var ship = _step4.value;

          if (!ship.placed) {
            return false;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return true;
    }
  }, {
    key: "inField",
    value: function inField(x, y) {
      var isNumber = function isNumber(n) {
        return parseInt(n) === n && !isNaN(n) && ![Infinity, -Infinity].includes(n);
      };

      if (!isNumber(x) || !isNumber(y)) {
        return false;
      }

      return 0 <= x && x < 10 && 0 <= y && y < 10;
    }
  }, {
    key: "addShip",
    value: function addShip(ship, x, y) {
      if (this.ships.includes(ship)) {
        return false;
      }

      this.ships.push(ship);

      if (this.inField(x, y)) {
        var dx = ship.direction === "row";
        var dy = ship.direction === "column";
        var placed = true;

        for (var i = 0; i < ship.size; i++) {
          var cx = x + dx * i;
          var cy = y + dy * i;

          if (!this.inField(cx, cy)) {
            placed = false;
            break;
          }

          var item = this.matrix[cy][cx];

          if (!item.free) {
            placed = false;
            break;
          }
        }

        if (placed) {
          Object.assign(ship, {
            x: x,
            y: y
          });
        }
      }

      _classPrivateFieldSet(this, _changed, true);

      return true;
    }
  }, {
    key: "removeShip",
    value: function removeShip(ship) {
      if (!this.ships.includes(ship)) {
        return false;
      }

      var index = this.ships.indexOf(ship);
      this.ships.splice(index, 1);
      ship.x = null;
      ship.y = null;

      _classPrivateFieldSet(this, _changed, true);

      return true;
    }
  }, {
    key: "removeAllShips",
    value: function removeAllShips() {
      var ships = this.ships.slice();

      var _iterator5 = _createForOfIteratorHelper(ships),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var ship = _step5.value;
          this.removeShip(ship);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return ships.length;
    }
  }, {
    key: "addShot",
    value: function addShot(shot) {
      var _this = this;

      var _iterator6 = _createForOfIteratorHelper(this.shots),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _step6$value = _step6.value,
              _x4 = _step6$value.x,
              _y4 = _step6$value.y;

          if (_x4 === shot.x && _y4 === shot.y) {
            return false;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      this.shots.push(shot);

      _classPrivateFieldSet(this, _changed, true);

      var matrix = this.matrix;
      var x = shot.x,
          y = shot.y;

      if (matrix[y][x].ship) {
        shot.setVariant("wounded");
        var ship = matrix[y][x].ship;
        var dx = ship.direction === "row";
        var dy = ship.direction === "column";
        var killed = true;

        for (var i = 0; i < ship.size; i++) {
          var cx = ship.x + dx * i;
          var cy = ship.y + dy * i;
          var item = matrix[cy][cx];

          if (!item.wounded) {
            killed = false;
            break;
          }
        }

        if (killed) {
          ship.killed = true;

          var _loop = function _loop(_i) {
            var cx = ship.x + dx * _i;
            var cy = ship.y + dy * _i;

            var shot = _this.shots.find(function (shot) {
              return shot.x === cx && shot.y === cy;
            });

            shot.setVariant("killed");
          };

          for (var _i = 0; _i < ship.size; _i++) {
            _loop(_i);
          }
        }
      }

      _classPrivateFieldSet(this, _changed, true);

      return true;
    }
  }, {
    key: "removeShot",
    value: function removeShot(shot) {
      if (!this.shots.includes(shot)) {
        return false;
      }

      var index = this.shots.indexOf(shot);
      this.shots.splice(index, 1);

      _classPrivateFieldSet(this, _changed, true);

      return true;
    }
  }, {
    key: "removeAllShots",
    value: function removeAllShots() {
      var shots = this.shots.slice();

      var _iterator7 = _createForOfIteratorHelper(shots),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var shot = _step7.value;
          this.removeShot(shot);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return shots.length;
    }
  }, {
    key: "randomize",
    value: function randomize() {
      var ShipClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Ship;
      this.removeAllShips();

      for (var size = 4; size >= 1; size--) {
        for (var n = 0; n < 5 - size; n++) {
          var direction = getRandomFrom("row", "column");
          var ship = new ShipClass(size, direction);

          while (!ship.placed) {
            var x = getRandomBetween(0, 9);
            var y = getRandomBetween(0, 9);
            this.removeShip(ship);
            this.addShip(ship, x, y);
          }
        }
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.removeAllShots();
      this.removeAllShips();
    }
  }]);

  return Battlefield;
}();