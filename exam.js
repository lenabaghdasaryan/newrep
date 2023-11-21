// Create a function that takes an array of numbers and return both the minimum and 
// maximum numbers, in that order.
// Examples:
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]
// function getMinMaxNumbers(arr) {
//     const filteredArr = [];
//     const minNum = Math.min(...arr);
//     const maxNum = Math.max(...arr);
//     filteredArr.push(minNum, maxNum);
//     return filteredArr
// }
// console.log(getMinMaxNumbers([5,-2]));



// Task 2
// Create a function that returns true if the first array can be nested inside the second and 
// false otherwise.
// arr1 can be nested inside arr2 if:
// 1.arr1's min is greater than arr2's min.
// 2.arr1's max is less than arr2's max.
// Example:
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false
// function nestedArr(arr1, arr2) {
//     if ((Math.min(...arr1) > Math.min(...arr2)) && (Math.max(...arr1) > Math.max(...arr2))) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(nestedArr([1, 2, 3, 4], [1, 2, 3, 5]))



// Create a function that takes an array of strings and return an array, sorted from shortest
// to longest.
// Example:
// sortByLength(["Google", "Apple", "Microsoft"])
// ➞ ["Apple", "Google", "Microsoft"]
// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
// sortByLength(["Turing", "Einstein", "Jung"])
// function sortByLength(arr) {
//     for (i = 0; i < arr.length; i++) {
//         for (j = i + 1; j < arr.length; j++) {
//             if (arr[i].length > arr[j].length) {
//                 let fix = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = fix
//             }
//         }
//     }
//     return arr
// };
// console.log(sortByLength(["Raphael", "Leonardo", "Michelangelo", "Donatello"]))



// Create a function that takes a number as an argument and returns the highest digit in 
// that number.
// Examples:
// highestDigit(379) ➞ 9
// highestDigit(2) ➞ 2
// highestDigit(377401) ➞ 7
// function getHighestNum(num) {
    
//     const newNum = String(num);
//     const arr = newNum.split('');
//     return Math.max(...arr);

// }
// console.log(getHighestNum(323))

// let matrix = ([
//     ["X", "O", "X"],
//     ["O", "X", "O"],
//     ["X", "#", "O"]
//   ])
// for (i = 0; i < matrix.length; i ++) {
//   for(j = 0; j < matrix[i].length; j ++){
//        if(matrix[i][j] === matrix[i][j+1] && matrix[i][j] === matrix[i][j+ 2]){
//    console.log(`Player ${matrix[i][j]} wins!`)
//   }
// //   else if (matrix[i][j] === matrix[i + 1][j] && matrix[i][j] === matrix[i + 2][j]){
// //   console.log((`Player ${matrix[i][j]} wins!`))
// // }
// //    else  if(matrix[i][j] === matrix[i +1][j +1] && matrix[i][j] === matrix[i+2][j+2]){
// //       console.log ((`Player ${matrix[i][j]} wins!`))
// //     }
//     else if(matrix[i][j+2] === matrix[i+1][j+1] && matrix[i][j+2] === matrix[i+2][j]){
//       console.log ((`Player ${matrix[i][j+2]} wins!`))
//       console.log(matrix[j])
//     }
//       }
//   }
