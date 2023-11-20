const day = ['Monday', 'Tuesday', 'Wensdey', 'Thursday', 'Friday'];
const getDayWithoutSwitch = (x) =>
  x > 0 && x <= day.length ? day[x - 1] : new Error('Invalid arguments');

const getDayNumber = (name) => {
  let n = day.indexOf(name);
  return n !== -1 ? n++ : new Error(`Invalid day name ${name}`);
};
console.log(getDayWithoutSwitch(2));
console.log(getDayNumber('Friday'));

// const mas = [1, 2, 3, 4];
// delete mas[0];
// console.log(mas);

// const animal = {
//   age: 10,
//   name: "Lion",
// };
// delete animal.age;
// console.log(animal);
