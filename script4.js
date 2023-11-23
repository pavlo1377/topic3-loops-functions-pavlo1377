function randArray(k) {
  let result = [];
  for (let i = 0; i < k; i++) {
    let randomNumber = Math.floor(Math.random() * (500 - 1)) + 1;
    result.push(randomNumber);
  }
  return result;
}
