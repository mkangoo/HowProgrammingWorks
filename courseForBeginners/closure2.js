const add = (x) => (y) => {
  const sum = x + y;
  console.log(`${x} + ${y} = ${sum}`);
  return sum;
};
const result = add(2)(3);
console.log(result);
