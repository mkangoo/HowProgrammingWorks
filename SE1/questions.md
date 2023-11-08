# Questions:



## Директива "use strict";

***Что за демон***

[MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode) / [MDN2](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params)


## Types
```
Примитивные:
Number
String
Boolean
BigInt
Symbol
Undefined
Null

Object:
```
## Объявление идентификаторов
***Вопрос только в var,он вообще не юзабельный??***
```
var x = 3;
let y = 5;
const z = 7;
```
## Console
```
console.log();
console.dir();
alert();
```

# Function

Про отличия function declaration и function expression,а именно this
//
Тестирование программ и обработка ошибок в Стек Трейсе

## For
```
for...of
for...in
```
## Ivent Loop

## Одноразовые функции:
***Область их применения***
```
(function () {
  console.log("Hello,World");
})();
```
# npm
```
json,yaml
```


## GIT
    1.Оформление коммитов
    2.Переход на ветку без коммита 
    
## Инструменты по работе с js (eslint ...);

## Test
Тестирование программ и обработка Stack Trace

eslint
про сумматор чисел и строк
про sort
get/set
Map/flatMAp
div/mod
++x ||x++
Замыкание
Про eval(),а именно почему опасен
concat()  slice();
let name = "Alex";
function sayHi() {
  console.log("Hi " + name);
}
name = "Masha";

sayHi();


Поиск дубликатов в массиве
function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}

const myArray = [1, 2, 2, 3, 4, 4, 5];
const duplicateValues = findDuplicates(myArray);
console.log(duplicateValues); // [2, 4]



Отсечка
const arr = [
  2, 43, 4, 5, 6, 76, 65, 5, 3, 1, 0, 10, 2, 43, 4, 5, 6, 76, 65, 5, 3, 1, 0,
  10, 2, 43, 4, 5, 6, 76, 65, 5, 3, 1, 0, 10, 2, 43, 4, 5, 6, 76, 65, 5, 3, 1,
  0, 10, 2, 43, 4, 5, 6, 76, 65, 5, 3, 1, 0, 10, 2, 43, 4, 5, 6, 76, 65, 5, 3,
  1, 0, 10, 2, 43, 4, 5, 6, 76, 65, 5, 3, 1, 0, 10, 2, 43, 4, 5, 6, 76, 65, 5,
  3, 1, 0, 10, 2, 43, 4, 5, 6, 76, 65, 5, 3, 1, 0, 10, 2, 43, 4, 5, 6, 76, 65,
  5, 3, 1, 0, 10, 2, 43, 4, 5, 6, 76, 65, 5, 3, 1, 0, 10, 2, 43, 4, 5, 6, 76,
  43, 4, 5, 6, 76, 65, 5, 3, 1, 0, 10, 2, 43, 4, 5, 6, 76, 65, 5, 3, 1, 0, 10,
  2, 43, 4, 5, 6, 76, 65, 5, 3, 1, 0, 10, 2, 43, 4, 5, 6, 76, 65, 5, 3, 1, 0,
  76, 65, 5, 3, 1, 0, 10, 2, 43, 4, 5, 6, 76, 65, 5, 3, 1, 0, 10,
];

const quickSort = (arr) => {
  const lgth = arr.length;
  if (lgth < 2) return arr;
  const pivotIndex = Math.floor(lgth / 2);
  const pivot = arr[pivotIndex];
  const less = [];
  const equal = [];
  const greater = [];
  for (let i = 0; i < lgth; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else if (arr[i] === pivot) {
      equal.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return [...quickSort(less), ...equal, ...quickSort(greater)];
};

console.log(quickSort(arr));
