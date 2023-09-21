import { integerToAmount } from "../integerToAmount";

test("integerToAmount returns correctly with no cents and default 2 precision", () => {
  expect(integerToAmount(20300n)).toBe("203.00");
});

test("integerToAmount returns correctly with 3 precision", () => {
  expect(integerToAmount(20300n, 3)).toBe("20.300");
});

test("integerToAmount returns correctly with 0 precision", () => {
  expect(integerToAmount(20300n, 0)).toBe("20300");
});
