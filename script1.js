function compact(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    if (!uniqueArr.includes(currentElement)) {
      uniqueArr.push(currentElement);
    }
  }
  return uniqueArr;
}


