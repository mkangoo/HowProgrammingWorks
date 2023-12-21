const items = [{ price: 40 }, { price: 120 }, { price: 505 }, { price: 350 }]
const amount = items.map(items => items.price)
const sum = items.reduce((total, items) => total + items.price, 0)

console.log(sum)
