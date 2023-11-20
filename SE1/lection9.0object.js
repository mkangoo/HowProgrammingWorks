'use strict';

const person1 = {};
person1.name = 'Alex';
person1.age = 18;
person1.born = 121;

const person2 = new Object();
person2.name = 'Misha';
person2.age = 19;
person2.born = 141;

const person3 = {
  name: 'Ilya',
  age: 16,
  born: 111
};
console.dir({ person1, person2, person3 });
