import { dictionary } from "./constants";

const parse = (character) => dictionary[character];

export const translate = (input) => {
  const items = input.split("");

  return items.reduce((acc, currVal) => {
    const { status, effort } = parse(currVal);
    acc[status] = (acc[status] || 0) + effort;
    return acc;
  }, {});
};
