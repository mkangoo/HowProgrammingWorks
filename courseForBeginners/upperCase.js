const capitalaze = s => s.charAt(0).toUpperCase() + s.slice(1)
const welcome = ({ name }) => `Ave,${capitalaze(name)}`
console.log(welcome({ name: 'marcus' }))
