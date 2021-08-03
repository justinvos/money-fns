import { formatAmount } from '../index';

test('formatAmount(\'1234.56\') with default options returns 1,234', () => {
  expect(formatAmount('1234.56')).toBe('1,234');
});

test('formatAmount(\'1234.56\') with decimals: true returns 1,234.56', () => {
  expect(formatAmount('1234.56', { decimals: true })).toBe('1,234.56');
});
