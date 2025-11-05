import Grid from "../grid.js"

//TODO: make these changeable before game starts
let rows = 27; // number of rows
let cols = 48;  // number of columns

const cellSize = 15; // px

// sets the variables in the style.css
grid.style.setProperty("--cols", cols);
grid.style.setProperty("--rows", rows);
grid.style.setProperty("--cell-size", `${cellSize}px`);

const totalCells = cols*rows;

const balancedStart = Math.floor(totalCells / 20); // 20% of total cells
// if you want more living cells in the start
const activeStart = Math.floor(totalCells / 25); // 25 of total cells

let gameStarted = false;

let iterations = 0; // counts iterations

let speed = 0.5; // in seconds

const startCells = balancedStart; // variable for start number of living cells

//TODO: use GRID?
let gameGrid = new Grid(rows, cols);

export function writeToCell(row, col, value) {
  gameGrid[row][col] = value;
}

export function readFromCell(row, col) {
  return gameGrid[row][col];
}

export function dump() {
  console.table(gameGrid);
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

function smallerGrid(){
    //TODO: decrease cols and rows, keep dimensions the same
}

function largerGrid(){
    //TODO: increase cols and rows, keep dimensions the same
}

function startGame(){

}

