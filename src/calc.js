function add(x, y) {
  return x + y;
}

class Calculator {
  constructor(options) {
    this.precision = options.precision;
  }
  add(x, y) {
    const sum = x + y;
    return Number(sum.toFixed(this.precision));
  }
}

module.exports = { add, Calculator };
