const factorial = function (x) {
  if (x <= 1) return 1
  return x * factorial(x - 1)
}

const fibonacci = function (x) {
  if (x === 1 || x === 2) return 1
  return fibonacci(x - 1) + fibonacci(x - 2)
}
console.log(factorial(5))
console.log(fibonacci(10))
