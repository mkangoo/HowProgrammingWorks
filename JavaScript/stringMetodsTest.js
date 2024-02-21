export const upperWordsName = fullName => {
  const [name, surname] = fullName.split(' ')
  const capitalizeFirstLetter = word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  const upperName = capitalizeFirstLetter(name)
  const upperSurname = capitalizeFirstLetter(surname)
  return `${upperName} ${upperSurname}`
}

export const reverseString = str => {
  const result = str.split('').reverse().join('')
  return result
}

export const palindromStr = str => {
  const palindrom = reverseString(str).toLowerCase()
  return palindrom === str.toLowerCase()
}

export const anagram = (wordOne, wordTwo) => {
  const sortedWordOne = wordOne.toLowerCase().split('').sort().join('')
  const sortedWordTwo = wordTwo.toLowerCase().split('').sort().join('')
  return sortedWordOne === sortedWordTwo
}


/*
Напишите функцию, которая принимает строку и возвращает количество гласных букв в ней.
Пример: countVowels('hello') должна вернуть 2 (e и o).
Сжатие строки:

Напишите функцию, которая принимает строку и возвращает ее "сжатую" версию. Замените повторяющиеся символы на один символ, за которым следует количество повторений.
Пример: compressString('aaabbbbcc') должна вернуть 'a3b4c2'.
Перевернутые слова:

Напишите функцию, которая принимает строку, состоящую из слов, разделенных пробелами, и возвращает строку с перевернутыми словами.
Пример: reverseWords('Hello World') должна вернуть 'olleH dlroW'.
Удаление дубликатов:

Напишите функцию, которая принимает строку и возвращает ее без повторяющихся символов.
Пример: removeDuplicates('aabbcc') должна вернуть 'abc'.
Проверка анаграмм:

Напишите функцию, которая принимает строку и возвращает первый повторяющийся символ в ней.
Пример: firstDuplicate('abcdefghija') должна вернуть 'a'.
Замена пробелов:

Напишите функцию, которая заменяет все пробелы в строке на знак подчеркивания.
Пример: replaceSpaces('hello world') должна вернуть 'hello_world'.

*/