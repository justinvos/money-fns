import { roundAmount } from '../index';

test('roundAmount rounds 1.33 to nearest 0.05 up to 1.33', () => {
  expect(roundAmount('1.33', '0.05')).toBe('1.35');
});

test('roundAmount rounds 1.32 to nearest 0.05 down to 1.30', () => {
  expect(roundAmount('1.32', '0.05')).toBe('1.30');
});

test('roundAmount rounds 1.35 to nearest 0.10 up to 1.40', () => {
  expect(roundAmount('1.35', '0.10')).toBe('1.40');
});

test('roundAmount rounds 1.45 to nearest 0.10 up to 1.50', () => {
  expect(roundAmount('1.45', '0.10')).toBe('1.50');
});