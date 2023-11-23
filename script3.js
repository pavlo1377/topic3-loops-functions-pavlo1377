function printNumbers(a, b) {
  if (a < b) {
    for (let i = a; i <= b; i++) {
      let repetition = i - a + 1;

      for (let j = 0; j < repetition; j++) {
        console.log(i);
      }
    }
  }
}
