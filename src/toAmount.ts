export function toAmount(integer: bigint, precision: number = 2): Amount {
  if (precision < 0) {
    throw new Error("Precision must be non-negative");
  }

  if (precision === 0) {
    return String(integer) as Amount;
  }

  const divisor = 10n ** BigInt(precision);
  const full = integer / divisor;
  const sub = absoluteBigInt(integer % divisor);

  const paddedSub = String(sub).padStart(Number(precision), "0");

  return `${full}.${paddedSub}` as Amount;
}

function absoluteBigInt(value: bigint): bigint {
  return value === -0n || value < 0n ? -value : value;
}

export type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export type Amount = `${bigint}.${bigint}` | `${bigint}`;
