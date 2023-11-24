const first = (callback) => {
  setTimeout(() => {
    console.log('First');
    callback();
  }, 400);
};

const second = () => {
  console.log('Second');
};

first(second);
