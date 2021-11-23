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

const db = {
  connect(host, port, user, password) {
    console.log(`Server is running on: ${host}:${port}`);
  },
  disconnect() {
    console.log("Server is disconnected");
  },
};
module.exports = { add, Calculator, db };
