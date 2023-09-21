<p align="center">
  <img alt="money-fns" title="money-fns" src="https://raw.githubusercontent.com/justinvos/money-fns/master/img/money-fns.svg" width="300" />
</p>

**money-fns** is a zero-dependency Money library built with BigInt and an FP-oriented design.

This package is side-effect free and is only 679 Bytes when gzipped and minified.
Compare with other packages on [Bundlephobia](https://bundlephobia.com/package/money-fns).

## Installation

NPM:

```sh
npm i money-fns
```

Yarn:

```sh
yarn add money-fns
```

## Usage

```ts
import {
  addAmounts,
  compareAmount,
  discountAmount,
  floatToAmount,
  formatUsdAmount,
  isAmountNegative,
  isAmountPositive,
  isAmountZero,
  isValidAmount,
  multiplyAmount,
  scaleAmount,
  subtractAmount,
  sumAmounts,
  toUsdAmount,
} from "money-fns";

addAmounts("1.00", "2.00"); // '3.00'
subtractAmount("3.00", "2.00"); // '1.00'
multiplyAmount("5.00", "1.15"); // '5.75'
scaleAmount("5.00", 3n); // '15.00'

toAmount(4.507); // '4.51'

sumAmounts(["1.00", "2.00", "4.00"]); // '7.00'
discountAmount("100.00", 2.5); // '97.50'
discountAmount("200.00", 4.28); // '191.44'

isAmountPositive("12.00"); // true
isAmountNegative("-12.00"); // true
isAmountZero("0.00"); // true
compareAmount("1.00", "3.00"); // -1

isValidAmount("0"); // false
isValidAmount("0.00"); // true

const a = toUsdAmount(1234); // '1234.00;
formatUsdAmount(a); // '1,234.00'
```

Try now with [RunKit](https://runkit.com/npm/money-fns)

### Amount type

Also exported is the `Amount` TypeScript type.

```ts
import { Amount } from "money-fns";

const price: Amount = "50.00";
```

It represents a valid money value to be used by these functions.

An Amount is defined as a number with exactly 2 subdecimal digits. E.g. `123.45` or `1.00`

These values are passed around as `string`s but you can import the Amount type and use in your code for more specificity.

### Custom Currencies

```ts
import { Digit, toAmount } from "money-fns";

type NzdAmount = `${bigint}.${Digit}${Digit}`;

function toNzdAmount(value: number): NzdAmount {
  return toAmount(value, { precision: 2 });
}
```

#### Custom currency formatting

```ts
export function formatNzdAmount(amount: NzdAmount): string {
  return formatAmount(amount, { locale: "en-NZ", precision: 2 });
}
```

## Acknowledgments

money-fns was heavily inspired by [money-math](https://github.com/ikr/money-math). money-fns hopes to bring it's concepts and modernise them with BigInts and out-of-the-box Typescript support.
