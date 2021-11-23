const add = require("./calc");

//Test suit
describe("calculator", () => {
  //Test cases
  it("add two numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
