console.time('Loop Time');

const obj = {
  name: 'Marcus',
  age: 48,
  children: [
    {
      name: 'Misha',
      age: 19
    },
    {
      name: 'Masha',
      age: 20
    }
  ]
};

console.log({ obj });
console.dir({ obj }, { showHidden: true, depth: 20 });

console.timeEnd('Loop Time');
