//Test 1

function Student(name, age) {
  this.name = name
  this.age = age
  this.sayHello = function () {
    console.log(`Hello ${this.name}, ${this.age}`)
  }
}

const myStudent = new Student('Alex', 20)
myStudent.sayHello()

//Test 2

function BankAccount(initialBalance) {
  this.balance = initialBalance

  this.depozit = function (amount) {
    this.balance += amount
    console.log('Succesfull')
    console.log(`${this.balance}`)
  }
  this.withdraw = function (amount) {
    if (this.balance < amount) {
      console.log('Error')
    } else {
      this.balance -= amount
      console.log(`${this.balance}`)
    }
  }
}

const myAccount = new BankAccount(1000)
myAccount.depozit(300)
myAccount.withdraw(1000)
myAccount.withdraw(500)

function Car(make, model) {
  this.make = make
  this.model = model
  this.displayInfo = function () {
    console.log(`Это автомобиль марки ${this.make}, модель ${this.model}.`)
  }
}
const myCar = new Car('Toyota', 'Camry')
myCar.displayInfo()

// Задача 4: Управление книжной библиотекой

// function Library() {
// Массив для хранения книг
//   this.books = [];

// Метод для выдачи книги
//   this.borrowBook = function (bookTitle) {
//     const bookIndex = this.books.findIndex(book => book.title === bookTitle);

//     if (bookIndex !== -1 && this.books[bookIndex].status === 'available') {
//       this.books[bookIndex].status = 'issued';
//       console.log(`Книга "${bookTitle}" успешно выдана.`);
//     } else {
//       console.log(`Книга "${bookTitle}" недоступна для выдачи.`);
//     }
//   };

//   // Метод для возврата книги
//   this.returnBook = function (bookTitle) {
//     const bookIndex = this.books.findIndex(book => book.title === bookTitle);

//     if (bookIndex !== -1 && this.books[bookIndex].status === 'issued') {
//       this.books[bookIndex].status = 'available';
//       console.log(`Книга "${bookTitle}" успешно возвращена.`);
//     } else {
//       console.log(`Ошибка: Книга "${bookTitle}" не может быть возвращена.`);
//     }
//   };
// }

// // Создание объекта библиотеки
// const myLibrary = new Library();

// // Добавление книг в библиотеку
// myLibrary.books.push({ title: 'JavaScript Basics', status: 'available' });
// myLibrary.books.push({ title: 'Python for Beginners', status: 'available' });

// // Выдача и возврат книг
// myLibrary.borrowBook('JavaScript Basics'); // Книга "JavaScript Basics" успешно выдана.
// myLibrary.returnBook('JavaScript Basics'); // Книга "JavaScript Basics" успешно возвращена.
// myLibrary.borrowBook('HTML5 Guide');       // Книга "HTML5 Guide" недоступна для выдачи.

function Product(name, price, quantity) {
  this.name = name
  this.price = price
  this.quantity = quantity
  this.calculateTotal = function () {
    return this.price * this.quantity
  }
}

const laptop = new Product('Laptop f1', 2000, 2)
console.log(laptop.calculateTotal())



const year = 2001
const result = new Date().getFullYear() - year
console.log(result);