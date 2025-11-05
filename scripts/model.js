//TODO: make these changeable before game starts
let cols = 48;  // number of columns
let rows = 27; // number of rows

const cellSize = 15; // px

// sets the variables in the style.css
grid.style.setProperty("--cols", cols);
grid.style.setProperty("--rows", rows);
grid.style.setProperty("--cell-size", `${cellSize}px`);

const totalCells = cols*rows;

const balancedStart = (totalCells / 20); // 20% of total cells
const activeStart = (totalCells / 25); // 25 of total cells

const iterations = 0; // counts iterations

const speed = 0.5; // in seconds

const startCells = balancedStart; // variable for start number of living cells

//TODO: use GRID?
const arr = Array.from({ length: rows }, () => 
  Array.from({ length: cols }, () => 0)
);

export function writeToCell(row, col, value) {
  arr[row][col] = value;
  log(`Skrev ${value} til række ${row}, kolonne ${col}.`);
}

export function readFromCell(row, col) {
  return arr[row][col];
}

export function dump() {
  console.table(arr);
}

function log(text) {
  console.log(text);
}

function countNeighbours(arr){
}

function liveOrDie(arr){
}

function clear(){}

function addRandomCells(num){}

export function getNumOfCols(){
    return cols;
}

export function getNumofRows(){
    return rows;
}


