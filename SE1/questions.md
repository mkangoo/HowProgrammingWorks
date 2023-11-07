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
Замыкание
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

