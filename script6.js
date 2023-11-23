function calc(a, b, op) {
  if (op === 1) {
    return a - b;
  } else if (op === 2) {
    return a * b;
  } else if (op === 3) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Error: Division by zero";
    }
  } else {
    return a + b;
  }
}
