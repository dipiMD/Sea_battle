"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Scene = /*#__PURE__*/function () {
  function Scene(name, app) {
    _classCallCheck(this, Scene);

    _defineProperty(this, "name", null);

    _defineProperty(this, "app", null);

    Object.assign(this, {
      name: name,
      app: app
    });
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "start",
    value: function start() {}
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "stop",
    value: function stop() {}
  }]);

  return Scene;
}();