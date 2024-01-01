function Calculation(numOne, numTwo) {
  this.numOne = numOne
  this.numTwo = numTwo
  this.sum = function () {
    return this.numOne + this.numTwo
  }
  this.subtraction = function () {
    return this.numOne - this.numTwo
  }
  this.multiplication = function () {
    return this.numOne * this.numTwo
  }
  this.division = function () {
    return Math.floor(this.numOne / this.numTwo)
  }
}

const s = new Calculation(2, 3)
console.log(s.sum())

const sub = new Calculation(2, 3)
console.log(sub.subtraction())

const multi = new Calculation(2, 3)
console.log(multi.multiplication())

const div = new Calculation(19, 5)
console.log(div.division())
