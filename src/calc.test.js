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
