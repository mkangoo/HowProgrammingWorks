const mas = [32, 34, 5, 21, 2, 0, 98, 7, 6, 74, 3, 23, 4, 54, 6, 76, 64, 3];
const quickSort = (arr) => {
  const lgth = arr.length;
  if (lgth < 2) return arr;
  const pivotIndex = Math.floor(lgth / 2);
  const pivot = arr[pivotIndex];
  const less = [];
  const greater = [];
  for (let i = 0; i < lgth; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] <= pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort(mas));
