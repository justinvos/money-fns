import { scaleAmount } from "../index";

test("scaleAmount evaluates 5.00 * 3 correctly to 15.00", () => {
  expect(scaleAmount("5.00", 3n)).toBe("15.00");
});
