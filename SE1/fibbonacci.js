export const fibbonacci = num => {
  let a = 1,
    b = 1
  for (let i = 3; i <= num; i++) {
    ;[a, b] = [b, a + b]
  }
  return b
}
