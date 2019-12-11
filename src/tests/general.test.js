const { addMoney, divMoney, mulMoney, subMoney, sumMoney } = require('../index')

test('addMoney adds each amount parameter', async () => {
  expect(addMoney('2.00', '2.00')).toBe('4.00')
})

test('subMoney subtracts the second amount from the first', async () => {
  expect(subMoney('3.00', '2.00')).toBe('1.00')
})

test('sumMoney totals an array of amounts', async () => {
  expect(sumMoney(['3.00', '2.00', '2.00', '1.00', '4.00'])).toBe('12.00')
})

test('divMoney finds the ratio between two amounts', async () => {
  expect(divMoney('4.00', '2.00')).toBe(2)
})

test('mulMoney multiples an amount by a factor', async () => {
  expect(mulMoney(5, '3.00')).toBe('15.00')
})
