# money-fns

**money-fns** is a Next-generation Money library built with ES Modules, BigInt and a FP-oriented design.

## Usage

```
import { addAmount, addAmounts, floatToAmount, mulAmount, mulAmounts, subAmount } from 'money-fns'

addAmount('1.00', '2.00') // '3.00'
subAmount('3.00', '2.00') // '1.00'
mulAmount('5.00', '3.00') // '15.00'

floatToAmount(4.507) // '4.51'

addAmounts(['1.00', '2.00']) // '3.00'
mulAmounts(['5.00', '3.00']) // '15.00'

addAmount('1.001', '2.003', { precision: 3 }) // '3.004'
```

### Options

Each function has an optional last parameter: *options*. The options object is structured as below with their defaults:
```js
{
  precision: 2
}
```

**precision** is the number of decimal points to calculate this operation with.
