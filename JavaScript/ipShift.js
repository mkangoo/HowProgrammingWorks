const ip = ipv => {
  const arr = ipv.split('.').map(Number)
  const shift = arr.map((element, i) => element << (8 * (3 - i)))
  const result = shift.reduce((acc, val) => acc + val)
  return result
}

const user = '127.0.0.1'

console.log(ip(user))
