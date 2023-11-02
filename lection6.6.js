"use strict";
const SALUTATION = "Ave";
const colors = [
  /* 1 */ "black",
  /* 2 */ "red",
  /* 3 */ "green",
  /* 4 */ "yellow",
  /* 5 */ "blue",
  /* 6 */ "magenta",
  /* 7 */ "cyan",
  /* 8 */ "white",
];
const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`;
const colorize = (name) => {
  let res = "";
  const letters = name.split("");
  let color = 1;
  for (const letter of letters) {
    res += colorer(letter, color++);
    if (color > colors.length) color = 1;
  }
  return res;
};
const greetings = (name) =>
  name.includes("Augustus")
    ? `${SALUTATION},${colorize(name)}`
    : `Hello, ${name}!`;

const fullName = "Marcus Aurelius Antoninus Augustus ";
console.log(greetings(fullName));
