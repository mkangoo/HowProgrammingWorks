const add = x => y => {
  const z = x + y
  console.log(x + '+' + y + '=' + z)
  return z
}
// const add = (x) => (y) => x + y;
const res = add(2)(3)
console.log(res)
