// 428
function findAmountOfZero(matrix) {
    let count = 0;
    for (i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length - 1 - i; j++) {
            if (matrix[i][j] === 0) {
                count++
            }
        }
    }
    return count
}
console.log(findAmountOfZero([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 20, 15, 16]
]))