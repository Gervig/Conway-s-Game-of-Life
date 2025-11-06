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

const balancedStart = Math.floor((totalCells / 100) * 20); // 20% of total cells
// if you want more living cells in the start
const activeStart = Math.floor((totalCells / 100) * 25); // 25 of total cells

let gameRunning = false;

let iterations = 0; // counts iterations

let speed = 0.5; // in seconds

let lastTime = 0;

let accumulator = 0;

const startCells = balancedStart; // variable for start number of living cells

document.getElementById("start").addEventListener("click", () => {
  gameRunning = !gameRunning; // toggle
  if (gameRunning) {
    lastTime = 0; // reset time tracking
    requestAnimationFrame(gameLoop);
  }
});

document.getElementById("slower").addEventListener("click", () => {
  speed += 0.1; // slower (bigger interval)
});

document.getElementById("faster").addEventListener("click", () => {
  speed = Math.max(0.05, speed - 0.1); // faster, minimum 0.05s
});

document.getElementById("smaller").addEventListener("click", () => {
  // optionally shrink grid or reduce cell size
});

document.getElementById("larger").addEventListener("click", () => {
  // optionally enlarge grid or increase cell size
});

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

//TODO: this is actually not useful here?
export function dump() {
  console.table(gameGrid);
}

function log(text) {
  console.log(text);
}

function nextIteration() {
  // Should read through the grid and calculate if a cell:
  // lives = 2-3 neighbours
  // dies = less than 2 neighbours || 4 or more neighbours
  // new cell = 3 neighbours && cell value === 0 --> cell value = 1
  // the border of the grid is not considered a living cell

  // to start with we clear the calculating grid
  calculateGrid.clear();

  // iterates over every cell in the grid
  for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      // finds all the neighbouring cells
      const neighboursValues = gameGrid.neighboursValues({ row: i, col: j });
      // sums all the values of the neighbours list
      const neighbours = neighboursValues.reduce((a, b) => a + b, 0);
      const currentValue = gameGrid.get({ row: i, col: j });

      if (currentValue === 1 && (neighbours === 2 || neighbours === 3)) {
        calculateGrid.set({ row: i, col: j }, 1);
      } else if (currentValue === 0 && neighbours === 3) {
        calculateGrid.set({ row: i, col: j }, 1);
      } else {
        calculateGrid.set({ row: i, col: j }, 0);
      }
    }
  }

  // finally sets the gameGrid to be a clone of the calculatedGrid
  gameGrid = calculateGrid.clone();
}

//TODO: adds num amount of new living cells to the gameGrid
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
  let cellsSet = 0;

  while (cellsSet < balancedStart) {
    const randomRow = getRandomInt(rows);
    const randomCol = getRandomInt(cols);

    // only write if the cell is currently dead
    if (readFromCell(randomRow, randomCol) === 0) {
      writeToCell(randomRow, randomCol, 1);
      cellsSet++; // count only if we actually wrote a new cell
    }
  }

  renderGameGrid(gameGrid);
  log("Game started!");
}

// --- GAME LOOP --- //

let last = 0;

function gameLoop(now) {
  if (!gameRunning) return; // stop if paused

  now = now || performance.now();
  const deltaTime = (now - (lastTime || now)) / 1000;
  lastTime = now;

  accumulator += deltaTime;

  // update game at fixed intervals
  while (accumulator >= speed) {
    accumulator -= speed;
    iterations++;
    nextIteration(); // update game state
    renderGameGrid(gameGrid); // render grid to HTML
  }

  requestAnimationFrame(gameLoop);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function renderGameGrid(grid) {
  // should read grid, if value is 1 then the cell should be black
  // if the value is 0 the cell should be white
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.querySelector(
        `.cell[data-row="${i}"][data-col="${j}"]`
      );
      if (grid.get({ row: i, col: j }) === 1) {
        cell.style.backgroundColor = "black";
      } else {
        cell.style.backgroundColor = "white";
      }
    }
  }
}
