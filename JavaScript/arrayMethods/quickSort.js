const quickSort = arr => {
  const lgth = arr.length
  if (lgth <= 1) return arr
  const pivotIndex = Math.floor(lgth / 2)
  const pivot = arr[pivotIndex]
  const less = []
  const greater = []

  arr.forEach((element, index) => {
    if (index !== pivotIndex) {
      element <= pivot ? less.push(element) : greater.push(element)
    }
  })

  return [...quickSort(less), pivot, ...quickSort(greater)]
}

const mas = [32, 34, 5, 21, 2, 7, 6, 74, [3, 23, [4, [54], 6], 76, 64, 3]]

const array = [...new Set(mas.flat(Infinity))]

const result = quickSort(array)

console.log(result)
