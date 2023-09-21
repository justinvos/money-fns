import { Amount } from "./integerToAmount";

export function formatAmount(amount: Amount, locale: Intl.LocalesArgument) {
  return Number(amount).toLocaleString(locale);
}
