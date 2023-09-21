import { toAmount } from "../index";

test("toAmount correctly rounds 4.507 to 4.50", () => {
  expect(toAmount(4.507)).toBe("4.50");
});

test("toAmount correctly converts -4.504 to -4.50", () => {
  expect(toAmount(-4.504)).toBe("-4.50");
});

test("toAmount correctly converts 4.504 with precision=3 to 4.504", () => {
  expect(toAmount(4.504, { precision: 3 })).toBe("4.504");
});
