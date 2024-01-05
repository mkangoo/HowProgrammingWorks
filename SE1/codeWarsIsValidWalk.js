const isValidWalk = walk => {
  if (walk.length !== 10) return false
  const counts = {
    n: 0,
    s: 0,
    w: 0,
    e: 0,
  }
  for (const step of walk) {
    counts[step]++
  }
  return counts['n'] === counts['s'] && counts['e'] === counts['w']
}
const mas = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']
console.log(isValidWalk(mas))
