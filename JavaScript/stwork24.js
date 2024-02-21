const items = [
  { price: 40 },
  { price: 120 },
  { price: '505' },
  { price: 350 },
  { price: -320 },
]

const sumTotal = basket => {
  let amount = 0
  for (const { price } of basket) {
    if (typeof price !== 'number') continue
    if (price > 0) amount += price
  }
  return amount
}

const sumBasket = basket => {
  return { basket, total: sumTotal(basket) }
}

const order = sumBasket(items)
console.log(order)
