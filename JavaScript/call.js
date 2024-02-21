function sum(a, b, c) {
  return `${this.name}: ${a + b + c}`
}

const sumInfo = {
  name: 'sum',
}

console.log(sum.call(sumInfo, 1, 2, 3))
