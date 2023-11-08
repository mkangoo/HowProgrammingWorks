const person1 = {
  name: "Alex",
  age: 19,
  born: 121,
};

const s = JSON.stringify(person1);
console.log(s);

const obj = JSON.parse(s);
console.log(obj);

const letter = ["A,B", "B", "C", "D", "E"];
console.log(letter + "");
console.log(JSON.stringify(letter));
console.log(letter.join("-"));
