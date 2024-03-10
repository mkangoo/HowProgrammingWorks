const mas = [1, 2, 3, [43, 2]]
console.log(mas.flat())

const masTwo = [1, 2, 3, [43, 2, [23, [2, [212]]]]]
console.log(masTwo.flat(Infinity))
