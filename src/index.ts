export function toCents (amount: string) {
  const [dollars, cents] = amount.split('.')
  return BigInt(dollars) * 100n + BigInt(cents)
}

export function fromCents (cents: bigint) {
  const dollars = cents / 100n
  const remainder = cents % 100n
  return `${dollars}.${remainder < 10 ? '0' : ''}${remainder}`
}

export function addMoney (leftAmount: string, rightAmount: string) {
  return fromCents(toCents(leftAmount) + toCents(rightAmount))
}

export function subMoney (minuend: string, subtrahend: string) {
  return fromCents(toCents(minuend) - toCents(subtrahend))
}

export function sumMoney (amounts: string[]) {
  let total = 0n

  for (const amount of amounts) {
    total += toCents(amount)
  }

  return fromCents(total)
}

export function divMoney (dividend: string, divisor: string): string {
  return fromCents(toCents(dividend) / toCents(divisor))
}

export function mulMoney (dividend: string, divisor: string): string {
  return fromCents(toCents(dividend) * toCents(divisor))
}

export function percentMoney (leftAmount: string, rightAmount: string): string {
  console.log('percentMoney', leftAmount, rightAmount)
  const result = mulMoney(leftAmount, rightAmount)
  console.log('result', result)
  return divMoney(result, '100.00')
}