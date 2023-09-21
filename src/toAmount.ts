import { Amount, integerToAmount } from "./integerToAmount";

const DEFAULT_OPTIONS: FloatToAmountOptions = {
  precision: 2,
  round: "floor",
};

/**
 * Converts a number to the Amount datatype.
 */
export function toAmount(
  value: number,
  inputOptions: Partial<FloatToAmountOptions> = {}
): Amount {
  const options = {
    ...DEFAULT_OPTIONS,
    ...inputOptions,
  };

  const [full, sub] = String(value).split(".");

  if (!sub) {
    const integer = BigInt(full) * 10n ** BigInt(Math.floor(options.precision));
    return integerToAmount(integer, options.precision);
  }

  const roundedSub = applySubRounding(sub, options);
  return `${full}.${roundedSub}` as Amount;
}

type FloatToAmountOptions = {
  precision: number;
  round: "floor";
};

function applySubRounding(sub: string, options: FloatToAmountOptions): bigint {
  if (sub.length <= options.precision) {
    return BigInt(sub);
  }

  if (options.round === "floor") {
    return BigInt(sub.slice(0, options.precision));
  }

  throw new Error("Unimplemented");
}
