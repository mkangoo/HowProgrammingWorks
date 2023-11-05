function fnNew(a, b = "Hello", c = 5) {
  console.dir({ a, b, c });
}
fnNew(2, 3, 4);
fnNew(2, 3);
fnNew(2);
fnNew();
