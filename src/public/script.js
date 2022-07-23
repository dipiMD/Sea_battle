"use strict";

var app = new Application({
  preparation: PreparationScene,
  computer: ComputerScene
});
app.start("preparation");