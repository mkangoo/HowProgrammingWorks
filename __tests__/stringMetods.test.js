import { upperWordsName } from '../SE1/stringMetodsTest'
import { reverseString } from '../SE1/stringMetodsTest'
import { palindromStr } from '../SE1/stringMetodsTest'
import { anagram } from '../SE1/stringMetodsTest'

test('', () => {
  expect(upperWordsName('mark aurelious')).toBe('Mark Aurelious')
})

test('Reverse string Test', () => {
  expect(reverseString('abrakadabra')).toBe('arbadakarba')
})

test('Palindrom Test', () => {
  expect(palindromStr('hello')).toBe(false)
  expect(palindromStr('Radar')).toBe(true)
})

test('Anagram Test', () => {
  expect(anagram('listen', 'silent')).toBe(true)
})
