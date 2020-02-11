import colors from 'colors'
import { addAmounts, floatToAmount, mulAmounts, subAmount } from '../index.js'

function test (label, result, expected) {
  console.log(`${label}:`)
  console.log(`  Result=${result}`)
  console.log(`  Expected=${expected}`)

  if (result === expected) {
    console.log('  PASS'.green)
  } else {
    console.log('  FAIL'.red)
  }
  console.log()
}


test('addAmounts adds each amount item with default options', addAmounts(['1.00', '2.00']), '3.00')

test('subAmount subtracts the second amount from the first', subAmount('3.00', '2.00'), '1.00')

test('mulAmounts multiples an amount by a factor', mulAmounts(['5.00', '3.00']), '15.00')

test('floatToAmount converts the float to the nearest amount value', floatToAmount(4.507), '4.51')
