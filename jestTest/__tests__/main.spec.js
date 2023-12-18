const { sum, factorial } = require('../src/main');

test('Test two Sum', () => {
  expect(sum(1, 3)).toBe(4);
});

test('Test factorial', () => {
  expect(factorial(3)).toBe(6);
});
