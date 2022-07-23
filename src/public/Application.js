"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Application = /*#__PURE__*/function () {
  function Application(scenes) {
    var _this = this;

    _classCallCheck(this, Application);

    _defineProperty(this, "mouse", null);

    _defineProperty(this, "player", null);

    _defineProperty(this, "opponent", null);

    _defineProperty(this, "scenes", {});

    _defineProperty(this, "activeScene", null);

    var mouse = new Mouse(document.body);
    var player = new BattlefieldView(true);
    var opponent = new BattlefieldView(false);
    Object.assign(this, {
      mouse: mouse,
      player: player,
      opponent: opponent
    });
    document.querySelector('[data-side="player"]').append(player.root);
    document.querySelector('[data-side="opponent"]').append(opponent.root);

    for (var _i = 0, _Object$entries = Object.entries(scenes); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          sceneName = _Object$entries$_i[0],
          SceneClass = _Object$entries$_i[1];

      this.scenes[sceneName] = new SceneClass(sceneName, this);
    }

    for (var _i2 = 0, _Object$values = Object.values(this.scenes); _i2 < _Object$values.length; _i2++) {
      var scene = _Object$values[_i2];
      scene.init();
    }

    requestAnimationFrame(function () {
      return _this.tick();
    });
  }

  _createClass(Application, [{
    key: "tick",
    value: function tick() {
      var _this2 = this;

      requestAnimationFrame(function () {
        return _this2.tick();
      });

      if (this.activeScene) {
        this.activeScene.update();
      }

      this.mouse.tick();
    }
  }, {
    key: "start",
    value: function start(sceneName) {
      if (this.activeScene && this.activeScene.name === sceneName) {
        return false;
      }

      if (!this.scenes.hasOwnProperty(sceneName)) {
        return false;
      }

      if (this.activeScene) {
        this.activeScene.stop();
      }

      var scene = this.scenes[sceneName];
      this.activeScene = scene;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      scene.start.apply(scene, args);
      return true;
    }
  }]);

  return Application;
}();