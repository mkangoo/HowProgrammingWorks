const find = (basket, name) => {
  for (const key in basket) {
    const items = basket[key];
    for (const item of items) {
      if (item.name === name) {
        return item;
      }
    }
  }
};
const purchase = {
  Electronics: [
    { name: "Laptop", price: 1500 },
    { name: "Keyboard", price: 100 },
    { name: "Mouse", price: 500 },
  ],
  Textile: [
    { name: "Bag", price: 50 },
    { name: "Mouse Pad", price: 200 },
  ],
};
const result = find(purchase, "Laptop");
console.log(result);
