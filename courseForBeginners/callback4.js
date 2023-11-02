const printA = (callback) => {
  console.log("A");
  callback();
};
const printB = (callback) => {
  console.log("B");
  callback();
};
const printC = (callback) => {
  console.log("C");
  callback();
};
const step3 = () => console.log("End");
const step2 = () => printC(step3);
const step1 = () => printA(step2);
step1();
