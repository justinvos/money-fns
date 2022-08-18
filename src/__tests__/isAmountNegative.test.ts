import { isAmountNegative } from "../index";

test("isAmountNegative returns false with 1.00", () => {
  expect(isAmountNegative("1.00")).toBe(false);
});

test("isAmountNegative returns true with -1.00", () => {
  expect(isAmountNegative("-1.00")).toBe(true);
});

test("isAmountNegative returns false with 0.00", () => {
  expect(isAmountNegative("0.00")).toBe(false);
});

test("isAmountNegative returns false with 0.01", () => {
  expect(isAmountNegative("0.01")).toBe(false);
});

test("isAmountNegative returns true with -0.01", () => {
  expect(isAmountNegative("-0.01")).toBe(true);
});
