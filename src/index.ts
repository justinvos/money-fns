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
export function floatToAmount (float: number, options: OptionsParameter = {}): string {
  const { precision }: Options = { ...defaults, ...options }
  const int = BigInt(Math.round(float * (10 ** precision)))
  return fromInt(int)
}

/**
 * Converts amount value into the bigint number of cents.
 * 
 * @param {string} amount 
 * @param {object} options 
 * @returns {bigint}
 */
function toInt (amount: string, options: OptionsParameter = {}): bigint {
  const { precision } = { ...defaults, ...options }
  const [full, sub] = amount.split('.')
  return BigInt(full) * BigInt(10 ** precision) + BigInt(sub)
}

/**
 * Converts a bigint number of cents into an amount value. 
 * 
 * @param {bigint} cents 
 * @param {object} options 
 * @returns {string}
 */
function fromInt (sub: bigint, options: OptionsParameter = {}): string {
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
 * @returns {string}
 */
export function addAmount(leftAmount: string, rightAmount: string): string {
  const total = toInt(leftAmount) + toInt(rightAmount);
  return fromInt(total);
}

/**
 * Adds all of the amounts terms into a sum amount.
 * 
 * @param {string[]} amounts 
 * @returns {string}
 */
export function sumAmounts(amounts: string[]): string {
  return fromInt(amounts.reduce((total, amount) => {
    return total + toInt(amount);
  }, BigInt(0)));
}

/**
 * Subtracts the subtrahend from the minuend to calculate the difference. I.e. difference = minuend - subtrahend
 * 
 * @param {string} minuend 
 * @param {string} subtrahend 
 * @returns {string}
 */
export function subAmount(minuend: string, subtrahend: string, options: OptionsParameter = {}) {
  return fromInt(toInt(minuend) - toInt(subtrahend), options);
}

/**
 * Multiplies the amount by the factor into the product amount.
 * 
 * @param {string} number 
 * @param {number} factor 
 * @returns {string}
 */
export function scaleAmount(amount: string, factor: number): string {
  return fromInt(BigInt(factor) * toInt(amount));
}
