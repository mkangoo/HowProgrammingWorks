const randomColor = () => {
  const result = () => {
    return Math.floor(Math.random() * 255)
  }
  return `rgb(${result()}, ${result()}, ${result()})`
}

console.log(randomColor())
