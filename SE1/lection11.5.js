const iterate = (cities, listener) => {
  let counter = 0;
  setInterval(() => {
    listener(cities[counter++]);
    if (counter >= cities.length) counter = 0;
  }, 1000);
};

const cities = ['Kiev', 'Moscow', 'London'];

const print = (city) => console.log('Next City:' + city);

iterate(cities, print);


