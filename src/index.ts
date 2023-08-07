type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type DoubleDigit = `${Digit}${Digit}`;
export type Amount = `${bigint}.${DoubleDigit}`;

/**
 * Sums (adds) all the Amounts in an array.
 */
export function sumAmounts(amounts: Amount[]): Amount {
  const integers = amounts.map(toInteger);
  const integerTotal = integers.reduce((accumulator, integer) => {
    return accumulator + integer;
  }, 0n);
  return toAmount(integerTotal);
}

/**
 * Adds all the Amount parameters.
 */
export function addAmounts(...amounts: Amount[]): Amount {
  return sumAmounts(amounts);
}

/**
 * Subtracts an amount from another.
 * @param minuend {Amount} the base amount
 * @param subtrahend {Amount} the amount to subtract off
 */
export function subtractAmount(minuend: Amount, subtrahend: Amount): Amount {
  return toAmount(toInteger(minuend) - toInteger(subtrahend));
}

/**
 * Scales (multiplies) an Amount by an integer factor.
 */
export function scaleAmount(amount: Amount, factor: bigint): Amount {
  return toAmount(toInteger(amount) * factor);
}

/**
 * Multiplies two Amounts.
 */
export function multiplyAmount(
  multiplier: Amount,
  multiplicand: Amount
): Amount {
  return toAmount((toInteger(multiplier) * toInteger(multiplicand)) / 100n);
}

/**
 * Divides the Amount by the divisor.
 */
export function divideAmount(amount: Amount, divisor: bigint): Amount {
  return toAmount(toInteger(amount) / divisor);
}

/**
 * Returns a reduced Amount by a percentage amount.
 */
export function discountAmount(amount: Amount, percentage: number): Amount {
  return toAmount(
    (toInteger(amount) * (10000n - BigInt(percentage * 100))) / 10000n
  );
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
  return amount === "0.00";
}

/**
 * Compares two Amounts. Useful for sorting.
 */
export function compareAmount(a: Amount, b: Amount): number {
  return Math.sign(Number(toInteger(a) - toInteger(b)));
}

export type CurrencyCode = "USD";

/**
 * Formats the Amount to have commas at each thousand-place.
 */
export function formatAmount(amount: Amount, currency: CurrencyCode): string {
  return Number(amount).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const AMOUNT_REGEX = /^\-?\d+\.\d\d$/;

/**
 * Checks if the string is a valid Amount.
 */
export function isValidAmount(value: string): boolean {
  return new RegExp(AMOUNT_REGEX).test(value);
}

/**
 * Converts a number to the Amount datatype.
 */
export function floatToAmount(float: number): Amount {
  const full = float > 0 ? Math.floor(float) : Math.ceil(float);
  const sub = BigInt(Math.abs(Math.round((float % 1) * 100)));
  return `${BigInt(full)}.${subToDoubleDigit(sub)}`;
}

function toInteger(amount: Amount): bigint {
  const [full, sub] = amount.split(".");
  const result = BigInt(`${full}${sub}`);
  return result;
}

function toAmount(integer: bigint): Amount {
  const full = integer / 100n;
  const sub = integer % 100n;
  return `${full}.${subToDoubleDigit(sub)}`;
}

function subToDoubleDigit(sub: bigint) {
  return String(sub).padStart(2, "0") as `${DoubleDigit}`;
}
