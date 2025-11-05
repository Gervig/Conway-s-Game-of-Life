export default class Grid {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.arr = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => 0)
    );
  }

  set({ row, col }, value) {
    this.arr[row][col] = value;
  }

  get({ row, col }) {
    return this.arr[row][col];
  }

  // returnerer index (nummeret) på cellen i denne række+kolonne
  indexFor({ row, col }) {}

  // returnerer et {row, col} objekt for cellen med dette index (nummer)
  rowColFor(index) {}

  // returnerer en liste over alle naboceller til denne (i form af {row, col} objekter
  neighbours({ row, col }) {
    let neighbours = [];

    return neighbours;
  }

  // returnerer en liste over alle nabocellers values.
  // Når der skal returneres en celle, er det i form at et objekt med `{row, col, value}`
  neighboursValues({ row, col }) {
    let neighboursValues = [];

    return neighboursValues;
  }

  // retunere cellen i en retning, undefined hvis der ikke er nogen
  north({ row, col }) {}

  south({ row, col }) {}

  west({ row, col }) {}

  east({ row, col }) {}

  rows() {
    return this.rows;
  }

  cols() {
    return this.cols;
  }

  // returnerer det samlede antal celler
  size() {
    return this.rows() * this.cols();
  }

  // skriver den angivne value ind i alle celler
  fill(value) {
    for (let i = 0; i < this.arr[rows].length() - 1; i++) {
      for (let j = 0; j < this.arr[cols].length() - 1; j++) {
        this.arr[i][j] = value;
      }
    }
  }

  clear() {
    //TODO: couldn't we just make a new grid?
    this.arr = Array.from({ length: this.rows }, () =>
      Array.from({ length: this.cols }, () => 0)
    );
  }
}
