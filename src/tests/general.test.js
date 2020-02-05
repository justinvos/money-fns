const { addAmounts, floatToAmount, mulAmounts, subAmount } = require('../../dist/index.umd')

test('addAmounts adds each amount parameter', () => {
  expect(addAmounts('1.00', '2.00')).toBe('3.00')
})

test('subAmount subtracts the second amount from the first', () => {
  expect(subAmount('3.00', '2.00')).toBe('1.00')
})

test('mulAmounts multiples an amount by a factor', () => {
  expect(mulAmounts('5.00', '3.00')).toBe('15.00')
})

test('floatToAmount converts the float to the nearest amount value', () => {
  expect(floatToAmount(4.507)).toBe('4.51')
})
