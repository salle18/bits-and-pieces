function factorial(n: number) {
  if (n < 0) return;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function factorialTCO(n: number, total = 1) {
  if (n < 0) return;
  if (n === 0) {
    return total;
  }
  return factorialTCO(n - 1, n * total);
}
