// 1) Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
// function solution(year) {
//     let result = Math.floor(((year - 1) / 100) + 1);
//     console.log(result);
// }
// solution(99);


// 2) Write a JavaScript function to check whether an object contains a given property.
//function hasObjectProperty(students = {}) {
// function hasProperty(student, property) {
//     if (student.hasOwnProperty(property)) {
//         return `Students object contains ${property} property`
//     } {
//         return `Students object  does not contain ${property} property`
//     }
// }

// let result = hasProperty({
//     name: "Lena",
//     surname: "Baghdasaryan",
//     age: 29
// }, 'surname')
// console.log(result)

//second variant

// function hasProperty(student, property) {
//     if (property in student) {
//         return `Students object contains ${property} property`
//     } {
//         return `Students object  does not contain ${property} property`
//     }
// }

// let result = hasProperty({
//     name: "Lena",
//     surname: "Baghdasaryan",
//     age: 29
// }, 'surnam')
// console.log(result)


// 3) Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
// let obj = {
//     name: "Lena",
//     surname: "Baghdasaryan",
//     age: 29
// };
// let key = Object.keys(obj);
// let val = Object.values(obj);
// const reversed = {};
// key.forEach((elem, ind) => {
//     reversed[val[ind]] = elem;

// })
// console.log(reversed)

//second variant

// let obj = {
//     name: "Lena",
//     surname: "Baghdasaryan",
//     age: 29
// };
// let key = Object.keys(obj);
// let val = Object.values(obj);
// const rev = key.reduce((reversed, el, ind) => {
//     reversed[val[ind]] = el;
//     return reversed
// }, {});
// console.log(rev)


// 4)Given an object or an array, return if it is empty.
// An empty object contains no key-value pairs.
// An empty array contains no elements.

// function returnEmptyobject(obj) {
//     let res = '';
//     if (Array.isArray(obj) && obj.length === 0) {
//         res = obj
//     } else if (!Array.isArray(obj) && Object.keys(obj).length === 0) {
//         res = obj
//     }
//     else {
//         res = "Object or array is not empty"
//     }
//     console.log(res)
// }
// returnEmptyobject({name : "Lena"})


// 5)Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
//Example:
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

// function getMultiplication(arr) {
//     const multiple = [];
//     let maxProd = 0
//     for (i = 0; i < arr.length - 1; i++) {
//         multiple.push(arr[i] * arr[i + 1])
//         let sorted = multiple.sort((a, b) => a - b)
//         maxProd = sorted[sorted.length - 1]
//     }
//     console.log(maxProd)
// }

// getMultiplication([3, 2, -2, -5, 7, 3, 25, 1])








