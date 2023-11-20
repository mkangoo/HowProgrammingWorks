const hash = {
  first: 7,
  second: 10,
  third: 3,
  fourth: 9
};
hash.fifth = 2;

for (const key in hash) {
  const value = hash[key];
  console.log(key, '\t', typeof key, '\t', value, '\t', typeof value);
}

const arr = [1, 2, 3, 4, 5];
for (const i in arr) {
  const value = arr[i];
  console.log(i, typeof i, value);
}
for (const i of arr) {
  const value = arr[i];
  console.log(i, typeof i, value);
}
