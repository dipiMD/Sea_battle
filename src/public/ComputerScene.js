"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var countPlayer = [];
var countOpponent = [];

var ComputerScene = /*#__PURE__*/function (_Scene) {
  _inherits(ComputerScene, _Scene);

  var _super = _createSuper(ComputerScene);

  function ComputerScene() {
    var _this;

    _classCallCheck(this, ComputerScene);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "untouchables", []);

    _defineProperty(_assertThisInitialized(_this), "playerTurn", true);

    return _this;
  }

  _createClass(ComputerScene, [{
    key: "init",
    value: function init() {
      countPlayer.push(document.querySelector(".ship-count.player.x4"), document.querySelector(".ship-count.player.x3"), document.querySelector(".ship-count.player.x2"), document.querySelector(".ship-count.player.x1"));
      countOpponent.push(document.querySelector(".ship-count.opponent.x4"), document.querySelector(".ship-count.opponent.x3"), document.querySelector(".ship-count.opponent.x2"), document.querySelector(".ship-count.opponent.x1"));
    }
  }, {
    key: "start",
    value: function start(untouchables) {
      var _this2 = this;

      var opponent = this.app.opponent;
      var randomButton = document.querySelector(".random");
      randomButton.classList.add("hidden");
      opponent.clear();
      opponent.randomize(ShipView);
      this.untouchables = untouchables;
      var repeatbutton = document.querySelector('[data-action="repeat"]');
      repeatbutton.addEventListener('click', function () {
        _this2.app.start("preparation");
      });
      this.setCounter(countPlayer);
      this.setCounter(countOpponent);
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this3 = this;

      var repeatbutton = document.querySelector('[data-action="repeat"]');
      repeatbutton.removeEventListener('click', function () {
        _this3.app.start("preparation");
      });
    }
  }, {
    key: "update",
    value: function update() {
      var _this$app = this.app,
          mouse = _this$app.mouse,
          opponent = _this$app.opponent,
          player = _this$app.player;
      var isEnd = opponent.loser || player.loser;
      var cells = opponent.cells.flat();
      cells.forEach(function (cell) {
        return cell.classList.remove("battlefield-item__active");
      });

      if (isEnd) {
        if (opponent.loser) {
          document.querySelector('.battle-now').src = "src/img/prise.png";
          document.querySelector('.battle-text').textContent = "You win!!";
        } else {
          document.querySelector('.battle-now').src = "src/img/sad.png";
          document.querySelector('.battle-text').textContent = "You lost..";
        }

        document.querySelector(".repeat").classList.remove("hidden");
        return;
      }

      if (isUnderPoint(mouse, opponent.table)) {
        var cell = cells.find(function (cell) {
          return isUnderPoint(mouse, cell);
        });

        if (cell) {
          cell.classList.add("battlefield-item__active");

          if (this.playerTurn && mouse.left && !mouse.pLeft) {
            var x = parseInt(cell.dataset.x);
            var y = parseInt(cell.dataset.y);
            var shot = new ShotView(x, y);
            var result = opponent.addShot(shot);

            if (result) {
              this.playerTurn = shot.variant === "miss" ? false : true;

              if (shot.variant === "killed") {
                var counter = this.countShipStats(opponent);
                this.updateCounter(counter, countOpponent);
              }
            }
          }
        }
      }

      if (!this.playerTurn) {
        var _x = getRandomBetween(0, 9);

        var _y = getRandomBetween(0, 9);

        var inUntouchable = false;

        var _iterator = _createForOfIteratorHelper(this.untouchables),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            if (item.x === _x && item.y === _y) {
              inUntouchable = true;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (!inUntouchable) {
          var _shot = new ShotView(_x, _y);

          var _result = player.addShot(_shot);

          if (_result) {
            this.playerTurn = _shot.variant === "miss" ? true : false;

            if (_shot.variant === "killed") {
              var _counter = this.countShipStats(player);

              this.updateCounter(_counter, countPlayer);
            }
          }
        }
      }
    }
  }, {
    key: "countShipStats",
    value: function countShipStats(user) {
      var arr = [0, 0, 0, 0];

      for (var i = 0; i < 10; i++) {
        var ship = user.ships[i];

        if (!ship.killed) {
          arr[ship.size - 1] += 1;
        }
      }

      return arr.reverse();
    }
  }, {
    key: "setCounter",
    value: function setCounter(countDivs) {
      countDivs[0].textContent = 1;
      countDivs[1].textContent = 2;
      countDivs[2].textContent = 3;
      countDivs[3].textContent = 4;
    }
  }, {
    key: "updateCounter",
    value: function updateCounter(counter, countDivs) {
      for (var i = 0; i < 4; i++) {
        countDivs[i].textContent = counter[i];
      }
    }
  }]);

  return ComputerScene;
}(Scene);