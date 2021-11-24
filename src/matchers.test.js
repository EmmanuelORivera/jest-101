import { beforeAll, expect, it } from "@jest/globals";

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
  it.skip(".toBe basic usage", () => {
    expect(sum).toBe(2);
    expect(name).toBe("Emmanuel");
    expect({ a: 1, b: 2 }).toBe({ b: 2, a: 1 }); // Should fail because .toBe is not deep equality
  });
});

describe("opposite matching", () => {
  it(".not basic usage", () => {
    expect(1 + 2).not.toEqual(2);
  });

  it("match regular expression", () => {
    expect("emmanuel").toMatch(/\w+/);
  });

  it("match numbers", () => {
    expect("185-3345-3343").toMatch(/^\d{3}-\d{4}-\d{4}$/);
    expect("1853-3345-3343").not.toMatch(/^\d{3}-\d{4}-\d{4}$/);
  });
});

describe("number comparisons", () => {
  it("compare numbers", () => {
    expect(1 + 2).toBeGreaterThan(2);
    expect(1 + 2).toBeGreaterThanOrEqual(2);

    expect(1 + 2).toBeLessThan(4);
    expect(1 + 2).toBeLessThanOrEqual(4);
  });
});

describe("array and object", () => {
  it("match arrays", () => {
    const users = ["Emmanuel", "John", "Jane"];
    // Just checks the value
    expect(users).toContainEqual("Emmanuel");
    // Uses strictly comparing elements
    expect(users).toContain(users[0]);
  });

  it.skip("object in array", () => {
    const users = [{ name: "Emmanuel" }, { name: "John" }];

    expect(users).toContainEqual({ name: "Emmanuel" });
    expect(users).toContain({ name: "Emmanuel" });
  });

  it("match object", () => {
    const user = { name: "Emmanuel", address: "street 123 number #321" };

    expect(user.name).toBeDefined();
    expect(user.age).not.toBeDefined();
  });
});
