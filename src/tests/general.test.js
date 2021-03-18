import colors from 'colors'
import { addAmount, floatToAmount, mulAmount, subAmount } from '../../lib/esm/index.js'

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


test('addAmount adds each amount item with default options', addAmount('1.00', '2.00'), '3.00')

test('subAmount subtracts the second amount from the first', subAmount('3.00', '2.00'), '1.00')

test('mulAmount multiples an amount by a factor', mulAmount(5, '3.00'), '15.00')

test('floatToAmount converts the float to the nearest amount value', floatToAmount(4.507), '4.51')
