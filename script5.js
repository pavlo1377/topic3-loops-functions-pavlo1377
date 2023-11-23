function showByTypes(arr) {
  let newArr = [];
  const numArr = [];
  const stringArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (typeof newArr[i] === "string") {
      stringArr.push(newArr[i]);
    } else if (typeof newArr[i] === "number") {
      numArr.push(newArr[i]);
    }
  }
  return { stringArr, numArr };
}
