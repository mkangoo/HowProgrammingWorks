/*
Testing with jest
Rules:
 -You cannot mutate the original array
 -Can't use sort()
*/

export const quickSort = arrNum => {
  const list = [...arrNum]
  const lgth = list.length
  if (lgth <= 2) return list
  const pivotIndex = Math.floor(lgth / 2)
  const pivot = list[pivotIndex]
  const less = []
  const greater = []
  list.forEach((element, index) => {
    if (index !== pivotIndex) {
      element < pivot ? less.push(element) : greater.push(element)
    }
  })
  return [...quickSort(less), pivot, ...quickSort(greater)]
}

export const sumElement = arrNum => {
  if (arrNum.length === 0) return arrNum
  const list = arrNum.slice()
  const sum = list.reduce((acc, val) => acc + val)
  return sum
}
// Return an array with elements greater than 10
export const filterArray = arrNum => {
  const list = JSON.parse(JSON.stringify(arrNum))
  const result = list.filter(element => element > 10)
  return result
}

export const arrConcat = (arrNumOne, arrNumTwo) => {
  const result = arrNumOne.concat(arrNumTwo)
  return result
}

export const sortNestedArrays = arrNum => {
  const list = arrNum.slice()
  const unificationArr = list.flat(Infinity)
  const sortedList = quickSort(unificationArr)
  return sortedList
}

export const reverseArr = arrNum => {
  const list = arrNum.slice()
  const arrayReverse = list.reverse()
  return arrayReverse
}

export const minMaxElementArr = arrNum => {
  const maxElement = Math.max(...arrNum)
  const minElement = Math.min(...arrNum)
  return { maxElement, minElement }
}

export const findValue = (arrNum, targetValue) => {
  const foundValue = arrNum.find(value => value === targetValue)
  return foundValue !== undefined ? foundValue : null
}
