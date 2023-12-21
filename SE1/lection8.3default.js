function fnNew(a, b = 'Hello', c = 5) {
  console.dir({ a, b, c })
}
fnNew(2, 3, 4)
fnNew(2, 3)
fnNew(2)
fnNew()

function fnOld(a, b, c) {
  b = b || 'Hello'
  c = c || 5
  console.dir({ a, b, c })
}
fnOld(2, 3, 4)
fnOld(2, 3)
fnOld(2)
fnOld()

function fnHash(args) {
  args.a = args.a || [1, 2, 3]
  args.b = args.b || 'Hello'
  args.c = args.c || 100
  console.dir(args)
}
fnHash({ a: [1, 2, 3], b: 'Hi', c: 13 })
fnHash({ b: 'World' })
fnHash({ c: 7 })
