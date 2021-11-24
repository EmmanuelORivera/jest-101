//creating my own matchers

import { expect, it } from "@jest/globals";
import jsonpath from "jsonpath";

expect.extend({
  toMatchJsonPath(received, argument) {
    const result = jsonpath.query(received, argument);
    if (result.length > 0) {
      return {
        pass: true,
        message: () => "matched",
      };
    } else {
      return {
        pass: false,
        message: () =>
          `expected ${JSON.stringify(received)} to match jsonpath ${argument}`,
      };
    }
  },
});

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

  it("checks contains Emmanuel as a name and project as a name from projects", () => {
    const matcher = expect.objectContaining({
      name: expect.stringContaining("Emmanuel"),
      projects: expect.arrayContaining([
        { name: expect.stringContaining("project") },
      ]),
    });

    expect(user).toEqual(matcher);
  });

  const result = jsonpath.query(user, "$.projects");
  console.log(JSON.stringify(result));
});

describe("jsonpath", () => {
  it("matches jsonpath", () => {
    const user = {
      name: "Juan",
    };
    expect(user).toMatchJsonPath("$.name");
  });
  it("does not match jsonpath", () => {
    const user = {
      name: "Emmanuel",
      address: "Chihuahua",
    };

    expect(user).not.toMatchJsonPath("$.age");
  });
});
