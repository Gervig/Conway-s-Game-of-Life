export default class Grid {
  constructor(rows, cols) {
    this.arr = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => 0)
    );
  }
}
