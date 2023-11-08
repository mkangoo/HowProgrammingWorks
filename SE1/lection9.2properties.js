const person = {
  name: "Marcus",
  age: 18,
  born: 121,
};
if ("name" in person) {
  console.log("Person name is " + person.name);
}

for (const key in person) {
  const value = person[key];
  console.log({ key, value });
}
const name = "Marcus";
const city = "Roma";

const person1 = { name, city };
console.log(person1);

const fieldName = "city";
const fieldValue = "Roma";
const person2 = {
  name: "Alex",
  [fieldName]: fieldValue,
};
console.log(person2);
const person3 = {
  name: "Cho",
  ["city" + "Born"]: fieldValue,
};
console.log(person3);

function fn(s) {
  return s + "Born";
}
person4 = {
  name: "Gena",
  [fn("city")]: fieldValue,
};
console.log(person4);

