const i = 3;
const x = 3.3;
const s = 'Hello';
const b = true;

//У обьекта можно изменять поля,хоть он и записан через const.Мы не можем присвоить другой массив или другой объект
const person = {
  name: 'Aleksandr',
  age: 22,
  city: 'Roma'
};
person.city = 'Moscow';
console.log({ isArray: Array.isArray(person) });

const cities = ['Moscow', 'Orenburg', 'Kolchugino', 'Odessa'];
cities.push('Kiev');
cities.unshift('London');
console.log(cities.shift());
console.log(cities.pop());
console.log({ cities }, typeof cities);
console.log({ isArray: Array.isArray(cities) });
console.log({ instanceofArray: cities instanceof Array });

//undefined-неопределенное значение скалярное
//null - неопределенное значение ссылочное
let emptyScalar;
console.log({ emptyScalar }, typeof emptyScalar);

const emptyObject = null;
console.log({ emptyObject }, typeof emptyObject);

let count = NaN;
console.log({ count }, typeof count);

count = undefined + 1;
console.log(count);

const tr =
  emptyObject === null ? 'emtyObject is null' : 'emptyObject is not null';
console.log(tr);
