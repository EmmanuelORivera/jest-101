import { beforeAll, expect } from "@jest/globals";

describe("equality", () => {
  let sum = null;
  let name = null;

  beforeAll(() => {
    sum = 1 + 1;
    name = "Emmanuel";
  });

  // Use this for Objects
  it(".toEqual basic usage", () => {
    expect(sum).toEqual(2);
    expect(name).toEqual("Emmanuel");
    expect({ a: 1, b: 2 }).toEqual({ b: 2, a: 1 });
  });

  // Use this for primitive values
  it(".toBe basic usage", () => {
    expect(sum).toBe(2);
    expect(name).toBe("Emmanuel");
    expect({ a: 1, b: 2 }).toBe({ b: 2, a: 1 }); // Should fail because .toBe is not deep equality
  });
});
