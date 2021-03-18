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
 * @param {string} leftAmount
 * @param {string} rightAmount 
 * @returns {string}
 */
export function addAmount(leftAmount, rightAmount) {
  const total = toInt(leftAmount) + toInt(rightAmount);
  return fromInt(total);
}

/**
 * Adds all of the amounts terms into a sum amount.
 * 
 * @param {string[]} amounts 
 * @returns {string}
 */
export function sumAmounts (amounts) {
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
export function subAmount(minuend, subtrahend, options = {}) {
  return fromInt(toInt(minuend) - toInt(subtrahend), options);
}

/**
 * Multiplies the amount by the factor into the product amount.
 * 
 * @param {number} factor 
 * @param {string} amount 
 * @returns {string}
 */
export function mulAmount (factor, optionalAmount) {
  function calc(amount) {
    return fromInt(BigInt(factor) * toInt(amount));
  }

  if (optionalAmount) {
    return calc(optionalAmount);
  } else {
    return calc;
  }
}
