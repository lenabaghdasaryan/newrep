// 3) Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
// function getReversedObject(obj) {
//     const key = Object.keys(obj);
//     const val = Object.values(obj);
//     const reversed = {};
//     key.forEach((elem, ind) => {
//         reversed[val[ind]] = elem;

//     })
//     console.log(reversed)
// }
// getReversedObject({
//     name: "Lena",
//     surname: "Baghdasaryan",
//     age: 29
// })

//second variant
function getReversedObject(obj) {
    const key = Object.keys(obj);
    const val = Object.values(obj);
    const rev = key.reduce((reversed, el, ind) => {
        reversed[val[ind]] = el;
        return reversed
    }, {});
    console.log(rev)
}
getReversedObject({
    name: "Lena",
    surname: "Baghdasaryan",
    age: 29
})