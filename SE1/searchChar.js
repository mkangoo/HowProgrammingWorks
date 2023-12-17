const text = 'JavaScript is an awesome programming language';

const amount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
};

const result = amount(text);
console.log(result);
