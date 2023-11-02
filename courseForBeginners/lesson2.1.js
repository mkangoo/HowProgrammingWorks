const find = (basket, name) => {
  const result = [];
  for (const key in basket) {
    const items = basket[key];
    for (const item of items) {
      if (item.name === name) {
          result.push(item);
      }
    }
  }
  return result;
};
const purchase = {
  Electronics: [
    { name: "Laptop", price: 1500 },
    { name: "Keyboard", price: 100 },
  ],
  Textile: [
    { name: "Bag", price: 50 },
    { name: "Laptop", price: 1200 },
  ],
};
const result = find(purchase, "Laptop");
console.log(result);
