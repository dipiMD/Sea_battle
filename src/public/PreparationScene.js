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

var cardFirst = document.querySelector('.card.first.hidden');
var cardSecond = document.querySelector('.card.second.hidden');
var shipDatas = [{
  size: 4,
  direction: "row",
  startX: 10,
  startY: 345
}, {
  size: 3,
  direction: "row",
  startX: 10,
  startY: 390
}, {
  size: 3,
  direction: "row",
  startX: 120,
  startY: 390
}, {
  size: 2,
  direction: "row",
  startX: 10,
  startY: 435
}, {
  size: 2,
  direction: "row",
  startX: 88,
  startY: 435
}, {
  size: 2,
  direction: "row",
  startX: 167,
  startY: 435
}, {
  size: 1,
  direction: "row",
  startX: 10,
  startY: 480
}, {
  size: 1,
  direction: "row",
  startX: 55,
  startY: 480
}, {
  size: 1,
  direction: "row",
  startX: 100,
  startY: 480
}, {
  size: 1,
  direction: "row",
  startX: 145,
  startY: 480
}];

var PreparationScene = /*#__PURE__*/function (_Scene) {
  _inherits(PreparationScene, _Scene);

  var _super = _createSuper(PreparationScene);

  function PreparationScene() {
    var _this;

    _classCallCheck(this, PreparationScene);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "draggedShip", null);

    _defineProperty(_assertThisInitialized(_this), "draggedOffsetX", 0);

    _defineProperty(_assertThisInitialized(_this), "draggedOffestY", 0);

    return _this;
  }

  _createClass(PreparationScene, [{
    key: "init",
    value: function init() {
      var player = this.app.player;

      var _iterator = _createForOfIteratorHelper(shipDatas),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _step.value,
              size = _step$value.size,
              direction = _step$value.direction,
              startX = _step$value.startX,
              startY = _step$value.startY;
          var ship = new ShipView(size, direction, startX, startY);
          player.addShip(ship);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.randomize = this.randomize.bind(this);
      this.fight = this.fight.bind(this);
    }
  }, {
    key: "start",
    value: function start() {
      var _this$app = this.app,
          player = _this$app.player,
          opponent = _this$app.opponent;
      opponent.clear();
      player.removeAllShots();
      player.ships.forEach(function (ship) {
        return ship.killed = false;
      });
      this.manually();
      document.querySelector('.repeat').classList.add("hidden");
      document.querySelector('.battle-now').src = "swords.png";
      document.querySelector('.battle-text').textContent = "Fight!";
      document.querySelector(".random").classList.remove("hidden");
      document.querySelector('.card.first').classList.add("hidden");
      document.querySelector('.card.second').classList.add("hidden");
      var randomizeButton = document.querySelector('[data-action="randomize"]');
      randomizeButton.addEventListener('click', this.randomize);
    }
  }, {
    key: "stop",
    value: function stop() {
      var randomizeButton = document.querySelector('[data-action="randomize"]');
      randomizeButton.removeEventListener('click', this.randomize);
      var fightButton = document.querySelector('.swords');
      fightButton.removeEventListener('click', this.fight);
    }
  }, {
    key: "update",
    value: function update() {
      var _this$app2 = this.app,
          mouse = _this$app2.mouse,
          player = _this$app2.player;

      if (!this.draggedShip && mouse.left && !mouse.pLeft) {
        var ship = player.ships.find(function (ship) {
          return ship.isUnder(mouse);
        });

        if (ship) {
          var shipRect = ship.div.getBoundingClientRect();
          this.draggedShip = ship;
          this.draggedOffsetX = mouse.x - shipRect.left;
          this.draggedOffsetY = mouse.y - shipRect.top;
          ship.x = null;
          ship.y = null;
        }
      }

      if (mouse.left && this.draggedShip) {
        var _player$root$getBound = player.root.getBoundingClientRect(),
            left = _player$root$getBound.left,
            top = _player$root$getBound.top;

        var x = mouse.x - left - this.draggedOffsetX;
        var y = mouse.y - top - this.draggedOffsetY;
        this.draggedShip.div.style.left = "".concat(x, "px");
        this.draggedShip.div.style.top = "".concat(y, "px");
      }

      if (!mouse.left && this.draggedShip) {
        var _ship = this.draggedShip;
        this.draggedShip = null;

        var _ship$div$getBounding = _ship.div.getBoundingClientRect(),
            _left = _ship$div$getBounding.left,
            _top = _ship$div$getBounding.top;

        var _player$cells$0$0$get = player.cells[0][0].getBoundingClientRect(),
            width = _player$cells$0$0$get.width,
            height = _player$cells$0$0$get.height;

        var point = {
          x: _left + width / 2,
          y: _top + height / 2
        };
        var cell = player.cells.flat().find(function (cell) {
          return isUnderPoint(point, cell);
        });

        if (cell) {
          var _x = parseInt(cell.dataset.x);

          var _y = parseInt(cell.dataset.y);

          player.removeShip(_ship);
          player.addShip(_ship, _x, _y);
        } else {
          player.removeShip(_ship);
          player.addShip(_ship);
        }
      }

      if (this.draggedShip && mouse.delta) {
        this.draggedShip.toggleDirection();
      }

      if (player.complete) {
        document.querySelector('.battle-now').style.cssText = 'opacity: 1';
        var swords = document.querySelector('.swords');
        swords.addEventListener('click', this.fight);
      } else {
        document.querySelector('.battle-now').style.cssText = 'opacity: 0.3';
      }
    }
  }, {
    key: "manually",
    value: function manually() {
      var player = this.app.player;
      player.removeAllShips();

      var _iterator2 = _createForOfIteratorHelper(shipDatas),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _step2.value,
              size = _step2$value.size,
              direction = _step2$value.direction,
              startX = _step2$value.startX,
              startY = _step2$value.startY;
          var ship = new ShipView(size, direction, startX, startY);
          player.addShip(ship);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "randomize",
    value: function randomize() {
      var player = this.app.player;
      player.randomize(ShipView);

      for (var i = 0; i < 10; i++) {
        var ship = player.ships[i];
        ship.startX = shipDatas[i].startX;
        ship.startY = shipDatas[i].startY;
      }
    }
  }, {
    key: "fight",
    value: function fight() {
      cardFirst.classList.remove('hidden');
      cardSecond.classList.remove('hidden');
      document.querySelector('.battle-now').src = "swords_ready.png";
      this.startComputer();
    }
  }, {
    key: "startComputer",
    value: function startComputer() {
      var matrix = this.app.player.matrix;
      var withoutShipItems = matrix.flat().filter(function (item) {
        return !item.ship;
      });
      var untouchables = [];
      untouchables = getRandomSeveral(withoutShipItems, 25);
      this.app.start("computer", untouchables);
    }
  }]);

  return PreparationScene;
}(Scene);