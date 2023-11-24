const slog = (base, n) => Math.log(n) / Math.log(base);
const createLog = (base) => (n) => slog(base, n);

const lg = createLog(10);
const ln = createLog(Math.E);

console.log('ln(5) = ', lg(5));
console.log('ln(5) = ', ln(5));
