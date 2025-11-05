export default class Grid {
  constructor(rows, cols) {
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
}
