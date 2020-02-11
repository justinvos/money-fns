# money-fns

**money-fns** is a Next-generation Money library built with ES Modules, BigInt and a FP-oriented design.

## Usage

```
import { addAmount, floatToAmount, mulAmounts, subAmount } from 'money-fns'

addAmount('1.00', '2.00') // '3.00'
subAmount('3.00', '2.00') // '1.00'
mulAmount('5.00', '3.00') // '15.00'

floatToAmount(4.507) // '4.51'
```
