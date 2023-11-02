"use strict";
const adder = (initial = 0) => ({
  value: initial,
  steps: [initial],
  add(value) {
    this.steps.push(value);
    this.value += value;
    return this;
  },
});
{
  const { value, steps } = adder(5).add(-8).add(11);
  console.log(value);
  const [a, b, c] = steps;
  console.log(a, b, c);
}
