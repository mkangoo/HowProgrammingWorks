const add = (a, b, callback) => {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    callback(new Error('Invalid args'))
    return
  }
  callback(null, a + b)
}

add(2, 3, (error, result) => {
  if (error) console.error(error)
  console.log(result)
})
