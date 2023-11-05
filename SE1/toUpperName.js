const name = ["alex", "masha", "vova", "alyona", "mark"];
const capitalizeFirstLetter = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const result = name.map(capitalizeFirstLetter);
console.log(result);
