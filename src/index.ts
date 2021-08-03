const defaults: Options = {
  precision: 2
}

interface OptionsParameter {
  precision?: number
}

interface Options {
  precision: number
}

/**
 * Converts a float to the nearest amount value.
 * 
 * @param {number} float 
 * @param {object} options 
 * @returns {string}
 */
export function floatToAmount(float: number, options: OptionsParameter = {}): string {
  const { precision }: Options = { ...defaults, ...options }
  const int = BigInt(Math.round(float * (10 ** precision)))
  return fromInt(int)
}

/**
 * Converts amount value into the bigint number of cents.
 * 
 * @param {string} amount 
 * @param {OptionsParameter} options 
 * @returns {bigint}
 */
function toInt(amount: string, options: OptionsParameter = {}): bigint {
  const { precision } = { ...defaults, ...options }
  const [full, sub] = amount.split('.')
  return BigInt(full) * BigInt(10 ** precision) + BigInt(sub)
}

/**
 * Converts a bigint number of cents into an amount value. 
 * 
 * @param {bigint} cents 
 * @param {OptionsParameter} options 
 * @returns {string}
 */
function fromInt(sub: bigint, options: OptionsParameter = {}): string {
  const { precision } = { ...defaults, ...options }
  const full = sub / BigInt(10 ** precision)
  const remainder = sub % BigInt(10 ** precision)
  return `${full}.${remainder.toString().padStart(precision, '0')}`
}

/**
 * Adds the two amounts terms into a sum amount.
 * 
 * @param {string} leftAmount
 * @param {string} rightAmount 
 * @param {OptionsParameter} options
 * @returns {string}
 */
export function addAmount(leftAmount: string, rightAmount: string, options: OptionsParameter = {}): string {
  const total = toInt(leftAmount, options) + toInt(rightAmount, options);
  return fromInt(total, options);
}

/**
 * Adds all of the amounts terms into a sum amount.
 * 
 * @param {string[]} amounts 
 * @param {OptionsParameter} options
 * @returns {string}
 */
export function sumAmounts(amounts: string[], options: OptionsParameter = {}): string {
  return fromInt(amounts.reduce((total, amount) => {
    return total + toInt(amount, options);
  }, BigInt(0)), options);
}

/**
 * Subtracts the subtrahend from the minuend to calculate the difference. I.e. difference = minuend - subtrahend
 * 
 * @param {string} minuend 
 * @param {string} subtrahend 
 * @param {OptionsParameter} options
 * @returns {string}
 */
export function subAmount(minuend: string, subtrahend: string, options: OptionsParameter = {}) {
  return fromInt(toInt(minuend, options) - toInt(subtrahend, options), options);
}

/**
 * Multiplies the amount by the factor into the product amount.
 * 
 * @param {string} number 
 * @param {number} factor 
 * @param {OptionsParameter} options
 * @returns {string}
 */
export function scaleAmount(amount: string, factor: number, options: OptionsParameter = {}): string {
  return fromInt(BigInt(factor) * toInt(amount, options), options);
}

/**
 * Returns whether the amount is positive or not.
 * 
 * @param {string} minuend 
 * @param {OptionsParameter} options
 */
export function isAmountPositive(amount: string, options: OptionsParameter = {}): boolean {
  return toInt(amount, options) > 0;
}

/**
 * Returns whether the amount is negative or not.
 * 
 * @param {string} minuend 
 * @param {OptionsParameter} options
 */
 export function isAmountNegative(amount: string, options: OptionsParameter = {}): boolean {
  return toInt(amount, options) < 0;
}

/**
 * Returns whether the amount is zero or not.
 * 
 * @param {string} minuend 
 * @param {OptionsParameter} options
 */
 export function isAmountZero(amount: string, options: OptionsParameter = {}): boolean {
  return toInt(amount, options) === 0n;
}

/**
 * Compares two amounts for sorting.
 * 
 * @param {string} leftAmount
 * @param {string} rightAmount
 * @param {OptionsParameter} options
 */
 export function compareAmounts(leftAmount: string, rightAmount: string, options: OptionsParameter = {}): number {
  return Number(toInt(subAmount(leftAmount, rightAmount, options), options));
}

/**
 * Checks whether the two values are equal.
 * @param {string} leftAmount
 * @param {string} rightAmount
 * @param {OptionsParameter} options
 */
export function isAmountEqual(leftAmount: string, rightAmount: string, options: OptionsParameter = {}): boolean {
  return toInt(leftAmount, options) === toInt(rightAmount, options);
}

/**
 * Rounds the amount to the nearest.
 * @param {string} amount
 * @param {string} nearest
 * @param {OptionsParameter} options
 */
export function roundAmount(amount: string, nearest: string, options: OptionsParameter = {}): string {
  return fromInt(BigInt(Math.round(Number(toInt(amount)) / Number(toInt(nearest)))) * toInt(nearest));
}

interface FormatOptionsParameter {
  commas?: boolean
  decimals?: boolean
}

const formatDefaults: FormatOptionsParameter = {
  commas: true,
  decimals: false
}

/**
 * Formats the amount with commas and/or decimals.
 * @param {string} amount
 * @param {FormatOptionsParameter} options
 */
export function formatAmount(amount: string, options: FormatOptionsParameter = {}): string {
  const { commas, decimals } = { ...formatDefaults, ...options };

  const number = decimals ? parseFloat(amount) : parseInt(amount);
  
  if (commas) {
    return number.toLocaleString();
  }

  return number.toString();
}
