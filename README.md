# money-fns

**money-fns** is a modern, FP-oriented Money calculation helper library.

## Usage

```
import { addAmounts, floatToAmount, mulAmounts, subAmount } from 'money-fns'

addAmounts('1.00', '2.00') // '3.00'
subAmount('3.00', '2.00') // '1.00'
mulAmounts('5.00', '3.00') // '15.00'

floatToAmount(4.507) // '4.51'
```
