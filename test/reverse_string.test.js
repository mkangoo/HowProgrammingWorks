const { describe } = require('yargs');
const reverseStr = require('./tasks1');

// test('Проверяем реверс строки', () => {
//   expect(reverseStr('Hello www')).toBe('www olleH');
// });
// test('Проверяем реверс строки', () => {
//   expect(reverseStr('lop')).toBe('pol');
// });

describe('Проверяем реверс строки', () => {
  const testCases = [
    {
      input: 'Hello www',
      expected: 'www olleH'
    },
    {
      input: 'lop',
      expected: 'pol'
    }
  ];
  testCases.forEach(({ input, expected }) => {
    test(`Проверяем реверс строки ${input}`, () => {
      expect(reverseStr(input)).toBe(expected);
    });
  });
});
