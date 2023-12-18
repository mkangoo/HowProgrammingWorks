// function expect(value) {
//   return {
//     toBe: (exp) => {
//       if (value === exp) {
//         console.log("Succes");
//       } else {
//         console.error("Error");
//       }
//     },
//   };
// }

const sum = (a, b) => {
  return a + b;
};

const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

// expect(sum(2, 3)).toBe(5);

module.exports = { sum, factorial };
