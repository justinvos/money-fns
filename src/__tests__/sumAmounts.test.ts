import { sumAmounts } from "../index";

test("addAmounts adds each amount item with default options", () => {
  expect(sumAmounts(["1.00", "2.00", "4.00"])).toBe("7.00");
});
