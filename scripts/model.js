import Grid from "../grid.js";

//TODO: make these changeable before game starts
let rows = 27; // number of rows
let cols = 48; // number of columns

const cellSize = 15; // px

// sets the variables in the style.css
grid.style.setProperty("--cols", cols);
grid.style.setProperty("--rows", rows);
grid.style.setProperty("--cell-size", `${cellSize}px`);

const totalCells = cols * rows;

const balancedStart = Math.floor(totalCells / 20); // 20% of total cells
// if you want more living cells in the start
const activeStart = Math.floor(totalCells / 25); // 25 of total cells

let gameStarted = false;

let iterations = 0; // counts iterations

let speed = 0.5; // in seconds

const startCells = balancedStart; // variable for start number of living cells

// the grid we show
let gameGrid = new Grid(rows, cols);
// the grid we use for calculating
let calculateGrid = new Grid(rows, cols);

export function writeToCell(row, col, value) {
  gameGrid.set({ row: row, col: col }, value);
}

export function readFromCell(row, col) {
  return gameGrid.get({ row: row, col: col });
}

export function dump() {
  console.table(gameGrid);
}

function log(text) {
  console.log(text);
}

function countNeighbours(arr) {}

function liveOrDie(arr) {}

function clear() {}

function addRandomCells(num) {}

export function getNumOfCols() {
  return cols;
}

export function getNumofRows() {
  return rows;
}

function smallerGrid() {
  //TODO: decrease cols and rows, keep dimensions the same
}

function largerGrid() {
  //TODO: increase cols and rows, keep dimensions the same
}

export function startGame() {
  for (let i = 0; i < balancedStart; i++) {
    let randomRow = getRandomInt(rows);
    let randomCol = getRandomInt(cols);

    //TODO: check that cell is not already alive

    writeToCell(randomRow, randomCol, 1);
  }

  renderGameGrid(gameGrid);

  log("Game started!");
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function renderGameGrid(arr) {
  // should read grid, if value is 1 then the cell should be black
  // if the value is 0 the cell should be white
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.querySelector(
        `.cell[data-row="${i}"][data-col="${j}"]`
      );
      if (arr.get({ row: i, col: j }) === 1) {
        cell.style.backgroundColor = "black";
      } else {
        cell.style.backgroundColor = "white";
      }
    }
  }
}
