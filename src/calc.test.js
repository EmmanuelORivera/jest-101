const add = require("./calc");

//Test suit
describe("calculator", () => {
  //Test cases
  describe("should perform addition", () => {
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
