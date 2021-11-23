const { add, Calculator, db } = require("./calc");

//Test suit
describe("calculator", () => {
  //Test cases
  describe("addition", () => {
    it("adds two positive numbers", () => {
      expect(add(1, 2)).toEqual(3);
    });
    it("adds two negative numbers", () => {
      expect(add(-10, -24)).toEqual(-34);
    });
    it("adds one positive number and one negative number", () => {
      expect(add(5, -3)).toEqual(2);
    });
  });
});

// Example of tests from hotel reservation
describe("Hotel Sunshine", () => {
  describe("Reservation", () => {
    it("should make a reservation when there are enough rooms available", () => {});
    it("should warn the administrator when there are only 5 available rooms left", () => {});
  });
  describe("Checkout", () => {
    it("should check if any appliance is broken", () => {});
    it("should refund gest when checkout is earlier than planned", () => {});
  });
});

describe("addition", () => {
  let calc = null;

  beforeEach(() => {
    const options = {
      precision: 2,
    };

    calc = new Calculator(options);
  });

  it("adds two positive numbers", () => {
    const result = calc.add(1.333, 3.2);
    expect(result).toEqual(4.53);
  });

  it("adds two negative numbers", () => {
    const result = calc.add(-1.333, -3.2);
    expect(result).toEqual(-4.53);
  });
});

describe("database", () => {
  beforeEach(() => {
    db.connect("localhost", "9999", "user", "pass");
  });
  afterEach(() => {
    db.disconnect();
  });
  it("some test", () => {
    console.log("test is executed");
  });
});
