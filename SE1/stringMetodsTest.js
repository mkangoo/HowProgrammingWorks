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
