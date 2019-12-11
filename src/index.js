function toCents (amount) {
  const [dollars, cents] = amount.split('.')
  return BigInt(dollars) * BigInt(100) + BigInt(cents)
}

function fromCents (cents) {
  const dollars = cents / BigInt(100)
  const remainder = cents % BigInt(100)
  return `${dollars}.${remainder < 10 ? '0' : ''}${remainder}`
}

function addMoney (...amounts) {
  return sumMoney(amounts)
}

function subMoney (minuend, subtrahend) {
  return fromCents(toCents(minuend) - toCents(subtrahend))
}

function sumMoney (amounts) {  
  let total = BigInt(0)

  for (const amount of amounts) {
    total += toCents(amount)
  }

  return fromCents(total)
}

function divMoney (dividend, divisor) {
  return (Number(toCents(dividend)) / divisor) / 100
}

function mulMoney (factor, amount) {
  return fromCents(BigInt(Math.round(factor * Number(toCents(amount)))))
}

exports.addMoney = addMoney
exports.subMoney = subMoney
exports.sumMoney = sumMoney
exports.divMoney = divMoney
exports.mulMoney = mulMoney
