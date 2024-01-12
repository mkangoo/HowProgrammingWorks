function get(obj, path) {
  const keys = path.split('.')
  return keys.reduce((acc, key) => {
    if (acc === undefined) {
      return undefined
    }
    return acc[key]
  }, obj)
}
const obj = {
  a: {
    b: {
      c: 'd',
    },
    e: 'f',
  },
}

console.log(get(obj, 'a.b'))
console.log(get(obj, 'a.e'))
console.log(get(obj, 'a.x'))
