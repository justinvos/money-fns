const defaults = {
  precision: 2
}

/**
 * Converts a float to the nearest amount value.
 * 
 * @param {number} float 
 * @param {object} options 
 * @returns {string}
 */
export function floatToAmount (float, options = {}) {
  const { precision } = { ...defaults, ...options }
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
function toInt (amount, options = {}) {
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
function fromInt (sub, options = {}) {
  const { precision } = { ...defaults, ...options }
  const full = sub / BigInt(10 ** precision)
  const remainder = sub % BigInt(10 ** precision)
  return `${full}.${remainder.toString().padStart(precision, '0')}`
}

/**
 * Adds the two amounts terms into a sum amount.
 * 
 * @param {string[]} leftAmount
 * @param {string[]} rightAmount
 * @param {object} options 
 * @returns {string}
 */
export function addAmount (leftAmount, rightAmount, options = {}) {
  const total = toInt(leftAmount, options) + toInt(rightAmount, options)
  return fromInt(total, options)
}

/**
 * Adds all of the amounts terms into a sum amount.
 * 
 * @param {string[]} amounts 
 * @param {object} options 
 * @returns {string}
 */
export function addAmounts (amounts, options = {}) {
  let total = BigInt(0)

  for (const amount of amounts) {
    total += toInt(amount, options)
  }

  return fromInt(total, options)
}

/**
 * Subtracts the subtrahend from the minuend to calculate the difference. I.e. difference = minuend - subtrahend
 * 
 * @param {string} minuend 
 * @param {string} subtrahend 
 * @param {object} options 
 * @returns {string}
 */
export function subAmount (minuend, subtrahend, options = {}) {
  return fromInt(toInt(minuend, options) - toInt(subtrahend, options), options)
}

/**
 * Multiplies all the amount factors into the product amount.
 * 
 * @param {string[]} amounts 
 * @param {object} options 
 * @returns {string}
 */
export function mulAmounts (amounts, options) {
  let product = '1.00'

  for (const amount of amounts) {
    product = mulAmount(product, amount, options)
  }

  return product
}

/**
 * Multiplies the two factors amount into the product amount.
 * 
 * @param {string} leftAmount 
 * @param {string} rightAmount 
 * @param {object} options 
 * @returns {string}
 */
export function mulAmount (leftAmount, rightAmount, options = {}) {
  return fromInt(toInt(leftAmount, options) * toInt(rightAmount, options) / BigInt(100), options)
}
