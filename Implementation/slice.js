function sliceArray(arr, first, last) {
    const newArr = [];
    if (last === undefined || last > arr.length) {
        last = arr.length;
    }
    last < 0 ? last = arr.length + last : last;
    for (let i = first; i < last; i++) {
        newArr.push(arr[i])
    }
    console.log(newArr)
}
sliceArray([1, 5, 6, 8, 9, 10, 56, 69], 3, -1)