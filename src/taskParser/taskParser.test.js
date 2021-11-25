import { translate } from "./taskParser";

it("translates d to half a dev day", () => {
  expect(translate("d")).toEqual({ Dev: 0.5 });
});

it("translates D to one dev day", () => {
  expect(translate("D")).toEqual({ Dev: 1.0 });
});

it("translated dD to one and a half dev days", () => {
  expect(translate("dD")).toEqual({ Dev: 1.5 });
});

it("translate q to half a qa day", () => {
  expect(translate("q")).toEqual({ QA: 0.5 });
});

it("translate qQ to one and a half qa day", () => {
  expect(translate("qQ")).toEqual({ QA: 1.5 });
});

it("translate dddQ", () => {
  expect(translate("dddQ")).toEqual({ QA: 1.0, Dev: 1.5 });
});
