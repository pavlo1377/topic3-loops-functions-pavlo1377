function findUnique(arr) {
  const uniqueValuesArr = new Set(arr);
  if (arr.length == uniqueValuesArr.size) {
    return true;
  } else {
    return false;
  }
}
