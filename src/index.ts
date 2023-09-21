export * from "./toAmount";
export * from "./formatAmount";
export * from "./currencies/jpy";
export * from "./currencies/usd";
import { integerToAmount, Amount } from "./integerToAmount";

/**
 * Sums (adds) all the Amounts in an array.
 */
export function sumAmounts<TAmount extends Amount>(
  amounts: TAmount[]
): TAmount {
  const integerTotal = toIntegers(amounts).reduce((accumulator, integer) => {
    return accumulator + integer;
  }, 0n);
  return integerToAmount(integerTotal);
}

function toIntegers<TAmount extends Amount>(amounts: TAmount[]): bigint[] {
  return amounts.map(toInteger);
}

/**
 * Adds all the Amount parameters.
 */
export function addAmounts<TAmount extends Amount>(
  ...amounts: TAmount[]
): TAmount {
  return sumAmounts(amounts);
}

/**
 * Subtracts an amount from another.
 * @param minuend the base amount
 * @param subtrahend the amount to subtract off
 */
export function subtractAmount<TAmount extends Amount>(
  minuend: TAmount,
  subtrahend: TAmount
): TAmount {
  return integerToAmount(toInteger(minuend) - toInteger(subtrahend));
}

/**
 * Scales (multiplies) an Amount by an integer factor.
 */
export function scaleAmount<TAmount extends Amount>(
  amount: TAmount,
  factor: bigint
): TAmount {
  return integerToAmount(toInteger(amount) * factor);
}

/**
 * Multiplies two Amounts.
 */
export function multiplyAmount<TAmount extends Amount>(
  multiplier: TAmount,
  multiplicand: TAmount
): Amount {
  throw new Error("Unimplemented");
}

/**
 * Divides the Amount by the divisor.
 */
export function divideAmount<TAmount extends Amount>(
  amount: TAmount,
  divisor: bigint
): TAmount {
  return integerToAmount(toInteger(amount) / divisor);
}

/**
 * Returns a reduced Amount by a percentage amount.
 */
export function discountAmount<TAmount extends Amount>(
  amount: TAmount,
  percentage: number
): TAmount {
  throw new Error("Unimplemented");
}

/**
 * Checks if the Amount is postive (more than 0).
 */
export function isAmountPositive(amount: Amount): boolean {
  return toInteger(amount) > 0n;
}

/**
 * Checks if the Amount is negative (less than 0).
 */
export function isAmountNegative(amount: Amount): boolean {
  return toInteger(amount) < 0n;
}

/**
 * Checks if the Amount is exactly zero.
 */
export function isAmountZero(amount: Amount): boolean {
  return toInteger(amount) === 0n;
}

/**
 * Compares two Amounts. Useful for sorting.
 */
export function compareAmount<TAmount extends Amount>(
  a: TAmount,
  b: TAmount
): number {
  return Math.sign(Number(toInteger(a) - toInteger(b)));
}

const AMOUNT_REGEX = /^\-?\d+\.\d+$/;

/**
 * Checks if the string is a valid Amount.
 */
export function isValidAmount(value: string): boolean {
  return new RegExp(AMOUNT_REGEX).test(value);
}

function toInteger<TAmount extends Amount>(amount: TAmount): bigint {
  const [full, sub] = amount.split(".");
  const result = BigInt(`${full}${sub}`);
  return result;
}

export function convert<SourceAmount, TargetAmount>(
  source: SourceAmount,
  exchangeRate: number
): TargetAmount {
  throw new Error("Unimplemented");
}
