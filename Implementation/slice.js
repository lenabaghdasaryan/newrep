function sliceArray(arr, first, last) {
    const newArr = [];
    if (last === undefined || last > arr.length) {
        last = arr.length
    }
    last < 0 ? last = arr.length + last : last;
    for (let i = first; i < last; i++) {

        let result = arr[i];
        newArr.push(result)
    }
    console.log(newArr)
}
sliceArray([1, 5, 6, 8, 9, 10, 56, 69], 3, -1)