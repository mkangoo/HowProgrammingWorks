const mas = [1, 2, 3, 4, 5, 6];

const sum = mas.reduce((acc, next) => acc + next);
console.log(sum);

// На первой итерации acc = 1,next = 2.Происходит сложение и в acc возвращается результат.
// На второй итерации будет acc = 3, next = 3;
