let scalar1 = 5;
let scalar2 = scalar1;
scalar1--;
scalar2++;
console.log(`${scalar1},${scalar2}`);

const obj1 = { age: 18 };
const obj2 = obj1;
obj1.age = 19;
console.dir(`${obj1.age},${obj2.age}`);
