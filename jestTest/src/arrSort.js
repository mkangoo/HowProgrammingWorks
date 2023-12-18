const quickSort = (arr) => {
  const lgth = arr.length;
  if (lgth < 2) return arr;
  const pivotIndex = Math.floor(lgth / 2);
  const pivot = arr[pivotIndex];
  const less = [];
  const greater = [];
  arr.forEach((element, index) => {
    if (index !== pivotIndex) {
      element < pivot ? less.push(element) : greater.push(element);
    }
  });
  return [...quickSort(less), pivot, ...quickSort(greater)];
};

module.exports = { quickSort };
