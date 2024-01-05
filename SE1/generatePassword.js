const generateKey = alphabet => {
  const max = alphabet.length
  return length => {
    let key = ''
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * max)
      key += alphabet[index]
    }
    return key
  }
}
const chars =
  'abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ1234567890!@#$%^&*()_+=-:;][{}'
const generatePassword = generateKey(chars)
const password = generatePassword(100)
console.log(password)
