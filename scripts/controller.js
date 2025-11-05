"use strict";
import * as view from "./view.js";
import * as model from "./model.js";

function startController() {
  // kald view.register
  view.registerEventHandlers();

  let numOfRows = model.getNumofRows();
  let numOfCol = model.getNumOfCols();

  window.model = model;

  const grid = document.getElementById("grid");

  log(`Rows: ${numOfRows}, Col: ${numOfCol}`);

  for (let row = 0; row < numOfRows; row++) {
    for (let col = 0; col < numOfCol; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.textContent = ""; // optional, can put "X" for alive
      grid.appendChild(cell);
    }
  }

  model.startGame();
}

export function setCell(row, col, value) {
  model.writeToCell(row, col, value);
    // model.dump();
}

startController();

function log(text) {
  console.log(text);
}
