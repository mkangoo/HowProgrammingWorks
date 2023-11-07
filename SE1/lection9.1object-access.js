"use strict";
const person = {
  name: "Alex",
  age: 15,
  city: "JavaScript",
  born: 121,
};

console.log("Person is name " + person.name);
console.log("Person is name " + person["name"]);

delete person.name;
console.dir({ person });

delete person["city"];
console.dir({ person });

const person2 = {
  name: "Misha",
  get city() {
    return "Moscow";
  },
  set city(value) {
    console.log("Misha remains in " + value);
  },
  born: 131,
};
console.dir(person2.city);
person2.city = "Vladimir";
