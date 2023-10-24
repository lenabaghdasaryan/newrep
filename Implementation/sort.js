function sortArr(arr = []) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length-1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr)
}
sortArr([240, 43, 55, 63, 5, 6, 235, 547, 25, 89, 45, 1000])


