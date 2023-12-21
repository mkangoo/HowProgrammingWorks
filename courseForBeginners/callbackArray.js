const stock = [
  { name: 'Laptop', price: 4500 },
  { name: 'Mouse', price: 6700 },
  { name: 'Keyboard', price: 0 },
]
const inStock = item => item.price > 0
const available = stock.filter(inStock)
console.log(available)
