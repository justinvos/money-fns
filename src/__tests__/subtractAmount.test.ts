import { subtractAmount } from "../index";

test("subtractAmount evaulates 3.00 - 2.00 correctly to 1.00", () => {
  expect(subtractAmount("3.00", "2.00")).toBe("1.00");
});
