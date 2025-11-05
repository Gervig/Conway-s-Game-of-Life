import * as controller from "./controller.js";

export function registerEventHandlers() {
  log(`Register event handlers`);

  // lav en eventhandler på #board
  // så når der bliver trykket en .cell
  // kaldes clickedCell()
  document.querySelector("#grid").addEventListener("click", clickedCell);
}

function clickedCell(event) {
  const cell = event.target;
  if (cell.classList.contains("cell")) {
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    log(`Der blev klikket på row: ${row} col: ${col}`);
    controller.setCell(row, col, 1);
  }
}

function log(text) {
  console.log(text);
}
