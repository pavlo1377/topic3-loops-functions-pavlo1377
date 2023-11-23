function create(str) {
  return function (n) {
    return str === n;
  };
}
