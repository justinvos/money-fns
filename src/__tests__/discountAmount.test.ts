import { discountAmount } from "../index";

test("discountAmount discounts 200.00 by 4.28% down to 191.44", () => {
  expect(discountAmount("200.00", 4.28)).toBe("191.44");
});
