import { toAmount } from "../toAmount";

test("toAmount returns correctly with no cents and default 2 precision", () => {
  expect(toAmount(20300n)).toBe("203.00");
});

test("toAmount returns correctly with 3 precision", () => {
  expect(toAmount(20300n, 3)).toBe("20.300");
});

test("toAmount returns correctly with 0 precision", () => {
  expect(toAmount(20300n, 0)).toBe("20300");
});
