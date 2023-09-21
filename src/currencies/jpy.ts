import { formatAmount } from "../formatAmount";
import { toAmount } from "../toAmount";

/**
 * Creates a Japanese Yen (JPY) Amount
 */
export function toJpyAmount(value: number): JpyAmount {
  return toAmount(value, { precision: 0 }) as JpyAmount;
}

/**
 * Formats the Amount to have commas at each thousand-place.
 */
export function formatJpyAmount(amount: JpyAmount): string {
  return formatAmount(amount, "ja-JP");
}

export type JpyAmount = `${bigint}`;
