<p align="center">
  <img alt="money-fns" title="money-fns" src="https://raw.githubusercontent.com/justinvos/money-fns/master/img/money-fns.svg" width="300" />
</p>

**money-fns** is a zero-dependency Money library built with BigInt and an FP-oriented design.

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
import { addAmounts, compareAmount, discountAmount, floatToAmount, formatAmount, isAmountPositive, isAmountNegative, isAmountZero, isValidAmount, multiplyAmount, subtractAmount, sumAmounts } from 'money-fns'

addAmounts('1.00', '2.00') // '3.00'
subtractAmount('3.00', '2.00') // '1.00'
multiplyAmount('5.00', 3n) // '15.00'

floatToAmount(4.507) // '4.51'

sumAmounts(['1.00', '2.00', '4.00']) // '7.00'
discountAmount('100.00', 2.5) // '97.50'
discountAmount('200.00', 4.28) // '191.44'

isAmountPositive('12.00') // true
isAmountNegative('-12.00') // true
isAmountZero('0.00') // true
compareAmount('1.00', '3.00') // -1

isValidAmount('0') // false
isValidAmount('0.00') // true

formatAmount('USD', '1234.00') // 1,234.00
```

### Amount datatype

Also exported is the `Amount` typescript type.

It represents a valid money value to be used by this library.

An Amount is defined as a number with exactly 2 subdecimal digits. E.g. `123.45` or `1.00`

These values are passed around as Strings but you can import the Amount and use in your code for more specificity.

## Acknowledgments

money-fns was heavily inspired by [money-math](https://github.com/ikr/money-math). money-fns hopes to bring it's concepts and modernise them with BigInts and out-of-the-box Typescript support.
