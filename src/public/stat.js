"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stat = /*#__PURE__*/_createClass(function Stat(user_id, played, wins, singleCage, doubleCage, tripleCage, quadroCage) {
  _classCallCheck(this, Stat);

  this.user_id = user_id;
  this.played = played;
  this.wins = wins;
  this.singleCage = singleCage;
  this.doubleCage = doubleCage;
  this.tripleCage = tripleCage;
  this.quadroCage = quadroCage;
});

var stat = new Stat();
module.exports = stat;