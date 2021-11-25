const fetchUser = (id, process) => {
  return fetch(`http://localhost:4000/users/${id}`);
};

describe("jest.fn to set up a spy function", () => {
  const mock = jest.fn();
  mock("Emmanuel");

  it("check if the function has been called", () => {
    expect(mock).toHaveBeenCalled();
  });
  it("check if the function has been called with a specific argument", () => {
    expect(mock).toHaveBeenCalledWith("Emmanuel");
  });
  it("check if the function has been called 1 time", () => {
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("mock implementation", () => {
    const fakeAdd = jest.fn().mockImplementation((a, b) => 5);

    expect(fakeAdd(1, 1)).toBe(5);
    expect(fakeAdd).toHaveBeenCalledWith(1, 1);
  });
});

describe("mock API call", () => {
  const user = {
    name: "Emmanuel",
  };

  it("mock fetch", () => {
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ user }));

    const process = jest.fn();

    fetchUser(111).then((x) => console.log(x));

    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:4000/users/111"
    );
  });
});
