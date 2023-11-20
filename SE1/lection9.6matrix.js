const mas = [
  [7, 10, 1, 5, 2],
  [6, 8, 9, 4, 30],
  [2, 9, 4, 3, 20],
  [9, 80, 1, 1, 0]
];
const max = (a, b) => (a > b ? a : b);
const res = mas
  .map((row) => row.reduce(max))
  .reduce((acc, rowMax) => acc + rowMax);
console.log(res);

for (const i in mas) {
  const row = mas[i];
  for (const j in row) {
    const col = row[j];
    console.log(i, j, col);
  }
}
