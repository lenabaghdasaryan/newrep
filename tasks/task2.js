// 2) Write a JavaScript function to check whether an object contains a given property.
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

// second variant

function hasProperty(student, property) {
    if (property in student) {
        return `Students object contains ${property} property`
    } {
        return `Students object  does not contain ${property} property`
    }
}

let result = hasProperty({
    name: "Lena",
    surname: "Baghdasaryan",
    age: 29
}, 'surnam')
console.log(result)