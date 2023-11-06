// 5)Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example:
// For inputArray = [3, 6, -2, -5, 7, 3]
// function getMultiplication(arr) {
//     const multiple = [];
//     let maxProd = 0
//     for (i = 0; i < arr.length - 1; i++) {
//         multiple.push(arr[i] * arr[i + 1])
//         maxProd = Math.max(...multiple)
//     }
//     console.log(maxProd)
// }

// getMultiplication([3, 6, -2, -5, 7, 3])
//second variant

function getMultiplication(arr) {
    const multiple = [];
    let maxProd = 0
    for (i = 0; i < arr.length - 1; i++) {
        multiple.push(arr[i] * arr[i + 1])
        let sorted = multiple.sort((a, b) => a - b)
        maxProd = sorted[sorted.length - 1]
    }
    console.log(maxProd)
}

getMultiplication([3, 2, -2, -5, 7, 3, 25, 1])
