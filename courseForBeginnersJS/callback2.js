const add = (a, b, callback) => callback(a + b)
const res = add(3, 4, res => {
  console.log(res)
})
