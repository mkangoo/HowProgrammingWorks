'use strict';
const iterate = (array, listener) => {
  array.forEach((element) => {
    listener(element);
  });
};

const city = ['Kiev', 'London', 'Moscow'];

const each = (city) => {
  console.log('City ' + city);
};
iterate(city, each);
