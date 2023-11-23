function reduceArr(arr, cb, sum = 0) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i]
        }
    }
    console.log(sum)
}
reduceArr([1, -2, -3, 4, 5, -6], (sum, elem) => { sum + elem })