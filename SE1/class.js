class Car {
  constructor(brand, color, year) {
    this.brand = brand;
    this.color = color;
    this.year = year;
  }
  start() {
    console.log(`${this.brand} ${this.color} ${this.year} started`);
  }
  stop() {
    console.log(`${this.brand} ${this.color} ${this.year} stopped`);
  }
  static discount() {
    console.log("Общая скидка -10%");
  }
  set rating(value) {
    this.score = value.toUpperCase();
  }
  get rating() {
    return this.score;
  }
}

const tesla = new Car("Tesla", "red", 2020);
Car.discount();
tesla.rating = "A";
console.log(tesla.rating);
