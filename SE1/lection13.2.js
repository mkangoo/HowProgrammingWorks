const matrix = [
  [1, 2, 3],
  [3, 2, 1],
  [2, 1, 3]
];
const max = (a, b) => (a > b ? a : b);
const result = matrix
  .map((element) => element.reduce(max))
  .reduce((acc, val) => acc + val);
console.log(result);
