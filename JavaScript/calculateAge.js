const calculateAge = date => {
  const currentDate = new Date()
  const birthDate = new Date(date)
  const ageDifference = currentDate - birthDate
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25
  const age = Math.floor(ageDifference / millisecondsInYear)
  return age
}
const birthdate = '2001-08-14'
const age = calculateAge(birthdate)
console.log(age)
