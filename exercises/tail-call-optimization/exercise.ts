function fibbonachi(n: number) {
  if (n <= 1) {
    return n;
  } else {
    return fibbonachi(n - 1) + fibbonachi(n - 2);
  }
}
