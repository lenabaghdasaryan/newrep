// Task 1
// Create a function that takes an array of numbers and return both the minimum and 
// maximum numbers, in that order.
// Examples:
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]

function getMinMaxNumbers(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    filteredArr.push(arr[0], arr[arr.length - 1]);
    return filteredArr
}
console.log(getMinMaxNumbers([1]));












