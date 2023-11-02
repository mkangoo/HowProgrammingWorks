const add = (a, b, callback) => {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    callback(new Error("Invalid arguments"));
    return;
  }
  callback(null, a + b);
};
const res = add(2, 4, (error, result) => {
  if (error) console.error(error);
  console.log(result);
});
console.log(typeof (res));