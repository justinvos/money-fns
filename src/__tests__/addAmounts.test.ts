import { addAmounts } from "../index";

test("addAmounts adds each amount item with default options", () => {
  expect(addAmounts("1.00", "2.00")).toBe("3.00");
});
