function add(x) {
  x += 2;
  function closure(y) {
    sum = x + y;
    console.log(`${x} + ${y} = ${sum}`);
    return sum;
  }
  return closure;
}
const result = add(2)(3);
console.log(result);
