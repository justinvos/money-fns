export type Amount = `${bigint}.${bigint}` | `${bigint}.0${bigint}`;

const myAmount: Amount = "12.0";

export function sumAmounts(...amounts: Amount[]): Amount {
  const integers = amounts.map(toInteger);
  const integerTotal = integers.reduce((accumulator, integer) => {
    return accumulator + integer;
  }, 0n);
  return toAmount(integerTotal);
}

export function addAmount(augend: Amount, addend: Amount): Amount {
  return toAmount(toInteger(augend) + toInteger(addend));
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
  const sub = Math.round((float % 1) * 100);
  return `${BigInt(full)}.${BigInt(sub)}`;
}

function toInteger(amount: Amount): bigint {
  const [full, sub] = amount.split(".");
  return BigInt(full) * 100n + BigInt(sub);
}

function toAmount(integer: bigint): Amount {
  const full = integer / 100n;
  const sub = integer % 100n;
  return `${full}.${sub}`;
}
