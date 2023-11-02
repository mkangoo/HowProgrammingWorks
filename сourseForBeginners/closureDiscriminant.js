const rootQuadratic = (a, b, c) => {
  let root = b * b - 4 * a * c;
  if (root <= 0) console.error("Not a roots");
  const closure = () => {
    const result = [];
    result.push(root);
    result.push((-b + Math.sqrt(root)) / (2 * a));
    result.push((-b - Math.sqrt(root)) / (2 * a));
    return result;
  };
  return closure();
};
let result = rootQuadratic(5, -6, 1);
console.log(result);

module.exports = { rootQuadratic };
