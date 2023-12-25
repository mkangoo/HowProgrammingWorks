import { quickSort } from '../SE1/arrayMetodsTest.js'
import { sumElement } from '../SE1/arrayMetodsTest.js'
import { filterArray } from '../SE1/arrayMetodsTest.js'
import { arrConcat } from '../SE1/arrayMetodsTest.js'
import { sortNestedArrays } from '../SE1/arrayMetodsTest.js'
import { reverseArr } from '../SE1/arrayMetodsTest.js'
import { minMaxElementArr } from '../SE1/arrayMetodsTest.js'
import { findValue } from '../SE1/arrayMetodsTest.js'

test('Sorting array elements', () => {
  const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
  const expectedArray = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
  expect(unsortedArray).toEqual([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])
  expect(quickSort(unsortedArray)).toEqual(expectedArray)
  expect(quickSort([])).toEqual([])
})

test('Sum of array elements', () => {
  expect(sumElement([1, 2, 3, 4, 5])).toBe(15)
  expect(sumElement([])).toEqual([])
})

test('Array filtering, elements >10', () => {
  const originArr = [32, 17, 2, 19, 7]
  const expectedArr = [32, 17, 19]
  expect(filterArray([])).toEqual([])
  expect(filterArray(originArr)).toEqual(expectedArr)
  expect(originArr).toEqual([32, 17, 2, 19, 7])
})

test('Array concatenation', () => {
  const originOneArr = [1, 2, 3]
  const originTwoArr = [4, 5, 6]
  const expectedArr = [1, 2, 3, 4, 5, 6]
  expect(arrConcat([])).toEqual([])
  expect(arrConcat(originOneArr, originTwoArr)).toEqual(expectedArr)
})

test('', () => {
  const originArr = [3, 2, 1, [7, 6, 5, [9, 8, 0, [4]]]]
  const expectedArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  expect(sortNestedArrays([])).toEqual([])
  expect(sortNestedArrays(originArr)).toEqual(expectedArr)
  expect(originArr).toEqual([3, 2, 1, [7, 6, 5, [9, 8, 0, [4]]]])
})

test('Reversed array', () => {
  const originArr = [1, 2, 3, 4, 5]
  expect(reverseArr([])).toEqual([])
  expect(reverseArr(originArr)).toEqual([5, 4, 3, 2, 1])
  expect(originArr).toEqual([1, 2, 3, 4, 5])
})

test('Find max and min elements in the array', () => {
  const array = [1, 5, 3, 8, 2, 7, 4]
  const result = minMaxElementArr(array)
  expect(result.maxElement).toEqual(8)
  expect(result.minElement).toEqual(1)
  expect(array).toEqual([1, 5, 3, 8, 2, 7, 4])
})

test('Find value in the array', () => {
  const array = [1, 5, 3, 8, 2, 7, 4]
  expect(findValue(array, 8)).toEqual(8)
  expect(findValue(array, 6)).toBeNull()
  expect(array).toEqual([1, 5, 3, 8, 2, 7, 4])
})
