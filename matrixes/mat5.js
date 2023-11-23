// 425
function findAmountOfEvenNumbers(matrix) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            if (matrix[i][j] % 2 === 0) {
                count++
            }
        }
    }
    return count

}
console.log(findAmountOfEvenNumbers([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 21, 15, 16]
]))