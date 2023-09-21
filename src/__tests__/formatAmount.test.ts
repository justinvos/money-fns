import { formatUsdAmount } from "..";

test("formatUsdAmount converts 1234.56 to 1,234.56", () => {
  expect(formatUsdAmount("1234.56")).toBe("1,234.56");
});

test("formatUsdAmount converts 123.45 to 123.45", () => {
  expect(formatUsdAmount("123.45")).toBe("123.45");
});

test("formatAmount converts 1234.00 to 1,234.00", () => {
  expect(formatUsdAmount("1234.00")).toBe("1,234.00");
});
