const { reversedArr } = require('../src/arrMetods');

test('Reversed Array', () => {
  const arr = [1, 2, 3, 4];
    const result = [4, 3, 2, 1];
    expect(reversedArr(arr)).toEqual(result)
});
