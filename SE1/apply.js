function sum(a, b, c) {
  return `${this.name}: ${a + b + c}`;
}

const sumInfo = {
  name: 'sum'
};

console.log(sum.apply(sumInfo, [2, 3, 4]));
