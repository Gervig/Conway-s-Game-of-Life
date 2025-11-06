import * as controller from "./controller.js";

export function registerEventHandlers() {
  log(`Register event handlers`);

  // lav en eventhandler på #board
  // så når der bliver trykket en .cell
  // kaldes clickedCell()
  document.querySelector("#grid").addEventListener("click", clickedCell);
  //TODO: handle button clicks
  document.querySelector('#buttons').addEventListener("click", clickedButton);
}

function clickedCell(event) {
  const cell = event.target;
  if (cell.classList.contains("cell")) {
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    log(`Der blev klikket på row: ${row} col: ${col}`);
  }
}

//TODO: handle button clicks
function clickedButton(event){
    const button = event.target;
}

function log(text) {
  console.log(text);
}
