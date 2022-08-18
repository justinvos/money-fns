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

export function multiplyAmount(amount: Amount, factor: bigint): Amount {
  return toAmount(toInteger(amount) * factor);
}

export function divideAmount(amount: Amount, divisor: bigint): Amount {
  return toAmount(toInteger(amount) / divisor);
}

export function isAmountPositive(amount: Amount): boolean {
  return toInteger(amount) > 0n;
}

export function floatToAmount(float: number): Amount {
  const full = Math.floor(float);
  const sub = BigInt(Math.round((float % 1) * 100));
  return `${BigInt(full)}.${subToDoubleDigit(sub)}`;
}

function toInteger(amount: Amount): bigint {
  const [full, sub] = amount.split(".");
  return BigInt(full) * 100n + BigInt(sub);
}

function toAmount(integer: bigint): Amount {
  const full = integer / 100n;
  const sub = integer % 100n;
  return `${full}.${subToDoubleDigit(sub)}`;
}

function subToDoubleDigit(sub: bigint) {
  return String(sub).padStart(2, "0") as `${DoubleDigit}`;
}
