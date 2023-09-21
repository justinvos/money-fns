import { formatJpyAmount } from "../..";

test("formatJpyAmount returns correct output", () => {
  expect(formatJpyAmount("62000")).toBe("62,000");
});
