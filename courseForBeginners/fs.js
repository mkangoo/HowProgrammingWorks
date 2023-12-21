function getCount(str) {
  // Initialize a count variable to keep track of the number of vowels.
  let count = 0

  str = str.toLowerCase()

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      count++
    }
  }

  return count
}

// Example usage:
console.log(getCount('hello')) // Output: 2 (e, o are vowels)
console.log(getCount('programming')) // Output: 4 (o, a, i, i are vowels)
