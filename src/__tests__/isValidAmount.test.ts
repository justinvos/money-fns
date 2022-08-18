import { isValidAmount } from "../index";

test("isValidAmount returns true with 1.00", () => {
  expect(isValidAmount("1.00")).toBe(true);
});

test("isValidAmount returns false with 1.000", () => {
  expect(isValidAmount("1.000")).toBe(false);
});

test("isValidAmount returns false with 1.0", () => {
  expect(isValidAmount("1.0")).toBe(false);
});

test("isValidAmount returns false with 1.", () => {
  expect(isValidAmount("1.")).toBe(false);
});

test("isValidAmount returns false with 1", () => {
  expect(isValidAmount("1")).toBe(false);
});

test("isValidAmount returns false with 1.00.0", () => {
  expect(isValidAmount("1.00.0")).toBe(false);
});
