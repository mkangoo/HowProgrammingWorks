const sortArray = (array) => {
  const oddNumbers = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  console.log(oddNumbers);
  const resultArray = array.map((num) =>
    num % 2 !== 0 ? oddNumbers.shift() : num
  );
  return resultArray;
};

const example3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(sortArray(example3));