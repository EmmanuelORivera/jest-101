//creating my own matchers

const { expect, it } = require("@jest/globals");

it("string contains", () => {
  const givenName = expect.stringContaining("Emmanuel");
  expect("Emmanuel Ochoa").toEqual(givenName);
});

describe("array", () => {
  const users = ["Emmanuel", "John", "Jane"];

  it("array containing", () => {
    const userSet = expect.arrayContaining(["Emmanuel", "Jane"]);
    expect(users).toEqual(userSet);
  });
});

describe("api", () => {
  const user = {
    name: "Emmanuel Ochoa",
    address: "Chihuahua, Mexico",
    projects: [{ name: "first project" }, { name: "second project" }],
  };

  const matcher = expect.objectContaining({
    name: expect.stringContaining("Emmanuel"),
    projects: expect.arrayContaining([
      { name: expect.stringContaining("project") },
    ]),
  });

  expect(user).toEqual(matcher);
});
