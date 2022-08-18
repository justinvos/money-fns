# money-fns

**money-fns** is a Zero-dependency Money library built with BigInt and an FP-oriented design.

## Installation

NPM:

```
npm i money-fns
```

Yarn:

```
yarn add money-fns
```

## Usage

```
import { addAmount, floatToAmount, isAmountPositive, multiplyAmount, subtractAmount, sumAmounts } from 'money-fns'

addAmount('1.00', '2.00') // '3.00'
subtractAmount('3.00', '2.00') // '1.00'
multiplyAmount('5.00', 3) // '15.00'

floatToAmount(4.507) // '4.51'

sumAmounts(['1.00', '2.00', '4.00']) // '7.00'

isAmountPositive('12.00') // true
isAmountPositive('-12.00') // false
isAmountPositive('0.00') // false
```

### Amount datatype

Also exported is the `Amount` typescript type.

It represents a valid money value to be used by this library.

An Amount is defined as a number with exactly 2 subdecimal digits. E.g. `123.45` or `1.00`

These values are passed around as Strings but you can import the Amount and use in your code for more specificity.

## Acknowledgments

money-fns was heavily inspired by https://github.com/ikr/money-math. This library hopes to bring it's concepts and modernise them with BigInts and out-of-the-box Typescript support.
