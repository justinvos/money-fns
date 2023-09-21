import { Amount } from "./integerToAmount";

export function formatAmount(
  amount: Amount,
  { locale, precision }: FormatAmountOptions
): string {
  return Number(amount).toLocaleString(locale, {
    maximumFractionDigits: precision,
    minimumFractionDigits: precision,
  });
}

type FormatAmountOptions = {
  locale: Intl.LocalesArgument;
  precision: number;
};
