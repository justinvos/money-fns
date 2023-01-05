type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type DoubleDigit = `${Digit}${Digit}`;
export type Amount = `${bigint}.${DoubleDigit}`;

export function sumAmounts(amounts: Amount[]): Amount {
  const integers = amounts.map(toInteger);
  const integerTotal = integers.reduce((accumulator, integer) => {
    return accumulator + integer;
  }, 0n);
  return toAmount(integerTotal);
}

export function addAmounts(...amounts: Amount[]): Amount {
  return sumAmounts(amounts);
}

export function subtractAmount(minuend: Amount, subtrahend: Amount): Amount {
  return toAmount(toInteger(minuend) - toInteger(subtrahend));
}

export function scaleAmount(amount: Amount, factor: bigint): Amount {
  return toAmount(toInteger(amount) * factor);
}

export function multiplyAmount(
  multiplier: Amount,
  multiplicand: Amount
): Amount {
  return toAmount((toInteger(multiplier) * toInteger(multiplicand)) / 100n);
}

export function divideAmount(amount: Amount, divisor: bigint): Amount {
  return toAmount(toInteger(amount) / divisor);
}

export function discountAmount(amount: Amount, percentage: number): Amount {
  return toAmount(
    (toInteger(amount) * (10000n - BigInt(percentage * 100))) / 10000n
  );
}

export function isAmountPositive(amount: Amount): boolean {
  return toInteger(amount) > 0n;
}

export function isAmountNegative(amount: Amount): boolean {
  return toInteger(amount) < 0n;
}

export function isAmountZero(amount: Amount): boolean {
  return amount === "0.00";
}

export function compareAmount(a: Amount, b: Amount): number {
  return Math.sign(Number(toInteger(a) - toInteger(b)));
}

export type CurrencyCode = "USD";

export function formatAmount(amount: Amount, currency: CurrencyCode): string {
  return Number(amount).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const AMOUNT_REGEX = /^\-?\d+\.\d\d$/;

export function isValidAmount(value: string): boolean {
  return new RegExp(AMOUNT_REGEX).test(value);
}

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
