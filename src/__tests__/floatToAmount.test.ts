import { floatToAmount } from "../index";

test("floatToAmount correctly rounds 4.507 to 4.51", () => {
  expect(floatToAmount(4.507)).toBe("4.51");
});

test("floatToAmount correctly converts -4.504 to -4.50", () => {
  expect(floatToAmount(-4.504)).toBe("-4.50");
});
