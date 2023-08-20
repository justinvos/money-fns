import { addAmounts } from "../index";

test("addAmounts adds each amount item with default options", () => {
  expect(addAmounts("1.00", "2.00")).toBe("3.00");
});

test("addAmounts with negative value and cents adds correctly", () => {
  expect(addAmounts("-3.01", "2.00")).toBe("-1.01");
});
