//Given an array of numbers, use a Set to efficiently remove duplicate elements.
function removeDuplicates(arr) {
    let set = new Set();
    arr.forEach(elem => {
        set.add(elem);
    })
    return set
}
console.log(removeDuplicates([1, 2, 5, 2, 4, 8, 1, 6, 9, 5, 15, 56, 15, 1, 2, 7, 8, 7, 9, 8]))
