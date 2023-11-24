function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  console.log('Generic animal sound');
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Наследование прототипа Animal
Dog.prototype = Object.create(Animal.prototype);

// Переопределение метода
Dog.prototype.makeSound = function () {
  console.log('Woof!');
};

const dog1 = new Dog('Buddy', 'Labrador');
dog1.makeSound(); // Вывод: Woof!
