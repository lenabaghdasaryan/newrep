function filterArray(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 === 0 ? newArr.push(arr[i]) : ''
    }
    console.log(newArr)
}
filterArray([5, 4, 8, 9, 7,])


