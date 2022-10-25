import { multiplyAmount } from "../index";

test("multiplyAmount evaluates 5.00 * 1.15 correctly to 5.75", () => {
  expect(multiplyAmount("5.00", "1.15")).toBe("5.75");
});
