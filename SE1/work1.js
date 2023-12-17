const sentence = 'JavaScript is a powerful programming language';

const averageWordLength = (str) => {
  const words = str.split(' ');
  let count = 0;
  words.forEach((element) => {
    count += element.length;
  });
  const averageLength = count / words.length;
  return averageLength.toFixed(2);
};

const result = averageWordLength(sentence);
console.log(result);
