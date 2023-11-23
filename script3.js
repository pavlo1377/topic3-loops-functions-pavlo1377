function printNumbers(a, b) {
  if (a < b) {
    for (let i = a; i <= b; i++) {
      // Кількість разів, яку треба вивести число 'i'
      let repetition = i - a + 1;

      // Вивести число 'i' 'repetition' разів
      for (let j = 0; j < repetition; j++) {
        console.log(i);
      }
    }
  }
}
