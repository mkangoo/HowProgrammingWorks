const { quickSort } = require('../src/arrSort');

test('Test sort array', () => {
  const arr = [4, 3, 2, 8, 1];
    const result = [1, 2, 3, 4, 8];
    expect(quickSort(arr)).toEqual(result)
});
