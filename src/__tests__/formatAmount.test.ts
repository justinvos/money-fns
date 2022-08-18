import { formatAmount } from "../index";

test("formatAmount converts 1234.56 to 1,234.56", () => {
  expect(formatAmount("1234.56", "USD")).toBe("1,234.56");
});

test("formatAmount converts 123.45 to 123.45", () => {
  expect(formatAmount("123.45", "USD")).toBe("123.45");
});
