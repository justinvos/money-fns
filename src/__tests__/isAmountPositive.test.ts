import { isAmountPositive } from '../index';

test('isAmountPositive returns true with 1.00', () => {
  expect(isAmountPositive('1.00')).toBe(true);
});

test('isAmountPositive returns false with -1.00', () => {
  expect(isAmountPositive('-1.00')).toBe(false);
});

test('isAmountPositive returns false with 0.00', () => {
  expect(isAmountPositive('0.00')).toBe(false);
});

test('isAmountPositive returns true with 0.01', () => {
  expect(isAmountPositive('0.01')).toBe(true);
});
