const sum = (a, b) => {
  return a + b;
};
const divide = (a, b) => {
  return a + b;
};
const calculate = (a, b, operation) => {
  return operation(a, b);
};
console.log(calculate(2, 4, sum));
