function spliceArray(arr, first, count, ...added) {
  const newArr = [];
  const newArr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= first && i < first + count) {
      newArr.push(arr[i]);
    }
    else if (i === (first - 1)) {
      newArr2.push(arr[first - 1], ...added)
    }
    else {
      newArr2.push(arr[i])
    }
  }
  console.log(newArr);
  console.log(newArr2);
}
spliceArray([1, 5, 6, 8, 9, 10, 56, 69], 2, 2, 3)

// function spliceArray(arr, first, count, ...added) {
//   const arr1 = [];
//   const arr2 = [];
//   arr.forEach((element, index) => {
//     if (index >= first && index < first + count) {
//       return arr1.push(arr[index]);
//     }
//     else if (index === (first - 1)) {
//       arr2.push(arr[first - 1], ...added);
//     }
//     else {
//       arr2.push(arr[index]);
//     }
//   });
//   console.log(arr1);
//   console.log(arr2);
// }
// spliceArray([1, 5, 6, 8, 9, 10, 56, 69], 2, 2, 3) 
