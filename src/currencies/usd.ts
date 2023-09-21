import { formatAmount } from "../formatAmount";
import { Amount, Digit } from "../integerToAmount";
import { toAmount } from "../toAmount";

/**
 * Creates a United States Dollar (USD) Amount
 */
export function toUsdAmount(value: number): UsdAmount {
  return toAmount(value, { precision: 2 }) as UsdAmount;
}

/**
 * Formats the Amount to have commas at each thousand-place.
 */
export function formatUsdAmount(amount: UsdAmount): string {
  return formatAmount(amount as Amount, { locale: "en-US", precision: 2 });
}

export type UsdAmount = `${bigint}.${Digit}${Digit}`;
