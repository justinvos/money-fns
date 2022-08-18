import { isAmountZero } from "../index";

test("isAmountZero returns false with 1.00", () => {
  expect(isAmountZero("1.00")).toBe(false);
});

test("isAmountZero returns false with -1.00", () => {
  expect(isAmountZero("-1.00")).toBe(false);
});

test("isAmountZero returns true with 0.00", () => {
  expect(isAmountZero("0.00")).toBe(true);
});

test("isAmountZero returns false with 0.01", () => {
  expect(isAmountZero("0.01")).toBe(false);
});

test("isAmountZero returns false with -0.01", () => {
  expect(isAmountZero("-0.01")).toBe(false);
});
