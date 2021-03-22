import { addAmount } from '../index';

test('addAmount adds each amount item with default options', () => {
  expect(addAmount('1.00', '2.00')).toBe('3.00');
});
