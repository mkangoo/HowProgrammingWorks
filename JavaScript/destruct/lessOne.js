let salaries = {
  John: 100,
  Pete: 300,
  Alex: 1000,
  Mary: 250,
}

const topSolary = list => {
  let name = null
  let max = 0
  Object.entries(list).forEach(([key, value]) => {
    if (max < value) {
      name = key
      max = value
    }
  })
  return name
}

console.log(topSolary(salaries))
