import { multiplyAmount } from "../index";

test("multiplyAmount evaluates 5.00 * 3 correctly to 15.00", () => {
  expect(multiplyAmount("5.00", 3n)).toBe("15.00");
});
