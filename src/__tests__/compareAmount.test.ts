import { Amount, compareAmount } from "../index";

test("compareAmount with sort outputs ascending sorted list", () => {
  const originalList: Amount[] = ["0.50", "1.00", "0.00", "2.00", "-1.00"];

  expect(originalList.sort(compareAmount)).toStrictEqual([
    "-1.00",
    "0.00",
    "0.50",
    "1.00",
    "2.00",
  ]);
});
