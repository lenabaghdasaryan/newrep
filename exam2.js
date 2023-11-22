// Task 2
// Create a function that returns true if the first array can be nested inside the second and 
// false otherwise.
// arr1 can be nested inside arr2 if:
// 1.arr1's min is greater than arr2's min.
// 2.arr1's max is less than arr2's max.
// Example:
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [0,4]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false

function nestedArr(arr1, arr2) {
    function sortArray(arr) {
        for (i = 0; i < arr.length; i++) {
            for (j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }
    arr1 = sortArray(arr1);
    arr2 = sortArray(arr2);
    const cond1 = arr1[0] > arr2[0] ? true : false;
    const cond2 = arr1[arr1.length - 1] < arr2[arr2.length - 1] ? true : false;
    return (cond1 && cond2);
}
console.log(nestedArr([1, 2, 3, 4], [2, 3]));