/**
 * Converts a float to the nearest amount value.
 * 
 * @param {number} float 
 * @returns {string}
 */
function floatToAmount (float) {
  const cents = BigInt(Math.round(float * 100))
  return fromCents(cents)
}

/**
 * Converts amount value into the bigint number of cents.
 * 
 * @param {string} amount 
 * @returns {bigint}
 */
function toCents (amount) {
  const [dollars, cents] = amount.split('.')
  return BigInt(dollars) * BigInt(100) + BigInt(cents)
}

/**
 * Converts a bigint number of cents into an amount value. 
 * 
 * @param {bigint} cents 
 * @returns {string}
 */
function fromCents (cents) {
  const dollars = cents / BigInt(100)
  const remainder = cents % BigInt(100)
  return `${dollars}.${remainder < 10 ? '0' : ''}${remainder}`
}

/**
 * Adds all of the amounts terms into a sum amount.
 * 
 * @param {string[]} amounts 
 * @returns {string}
 */
function addAmounts (...amounts) {
  let total = BigInt(0)

  for (const amount of amounts) {
    total += toCents(amount)
  }

  return fromCents(total)
}

/**
 * Subtracts the subtrahend from the minuend to calculate the difference. I.e. difference = minuend - subtrahend
 * 
 * @param {string} minuend 
 * @param {string} subtrahend 
 * @returns {string}
 */
function subAmount (minuend, subtrahend) {
  return fromCents(toCents(minuend) - toCents(subtrahend))
}

/**
 * Multiplies all the amount factors into the product amount.
 * 
 * @param {string[]} amounts 
 * @returns {string}
 */
function mulAmounts (...amounts) {
  let product = '1.00'

  for (const amount of amounts) {
    product = mulAmount(product, amount)
  }

  return product
}

/**
 * Multiplies all the two factors amount into the product amount.
 * 
 * @param {string} leftAmount 
 * @param {string} rightAmount
 * @returns {string}
 */
function mulAmount (leftAmount, rightAmount) {
  return fromCents(toCents(leftAmount) * toCents(rightAmount) / BigInt(100))
}

exports.floatToAmount = floatToAmount
exports.addAmounts = addAmounts
exports.subAmount = subAmount
exports.mulAmounts = mulAmounts
