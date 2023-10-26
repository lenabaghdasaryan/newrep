// function sortArr(arr = []) {
//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr.length-1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let res = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = res;
//             }
//         }
//     }
//     console.log(arr)
// }
// sortArr([240, 43, 55, 63, 5, 6, 235, 547, 25, 89, 45, 1000])

function sortArr(arr) {
    const newArr = [];
    for (i = 0; i < arr.length * 12; i++) {
        let min = Math.min(...arr);
        newArr.push(min);
        let index = arr.indexOf(min)
        arr.splice(index, 1)
    }

    console.log(newArr)
}
sortArr([240, 43, 55, 63, 5, 6, 235, 547, 25, 89, 45, 1000])