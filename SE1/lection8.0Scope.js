const cities = ["Moscow", "Kiev", "Rostov", "London", "Riga"];
const f = (s) => s.length;

function f1() {
  const cities = ["Moscow", "Kiev"];
  const f = (s) => s.toUpperCase();
  console.dir({ cities });
  console.dir(cities.map(f));
  {
    const f = (s) => s.toLowerCase();
    console.dir({ cities });
    console.dir(cities.map(f));
  }
  {
    const cities = ["London", "Riga"];
    console.dir({ cities });
    console.dir(cities.map(f));
  }
}
f1();
console.dir({ cities });
console.dir(cities.map(f));
