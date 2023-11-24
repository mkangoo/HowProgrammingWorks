'use strict';
const iterate = (array, listener) => {
  array.forEach((element) => {
    listener(element);
  });
};

const city = ['Kiev', 'London', 'Moscow'];

const print = (city) => {
  console.log('City ' + city);
};
iterate(city, print);
