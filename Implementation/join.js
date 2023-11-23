function joinArr(arr, sep = '+') {
    let str = '';
    for (let i = 0; i < arr.length - 1; i++) {
        str = str + arr[i] + sep;
    }
    str = str + arr[arr.length - 1];
    console.log(str);
    console.log(typeof str)
}
joinArr([1, 2, 3])