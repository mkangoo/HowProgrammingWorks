// function fibonacci1(num) {
//   if (num <= 2) return 1;
//   return fibonacci1(num - 1) + fibonacci1(num - 2);
// }
// console.log(fibonacci1(40));

function fibonacci2(num) {
  let a = 1,
    b = 1
  for (let i = 3; i <= num; i++) {
    ;[a, b] = [b, a + b]
  }
  return b
}
console.log(fibonacci2(40))
