// 426
function findSumOfEvenNumbers(matrix) {
    let sum = 0;
    for (i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length - 1 - i; j++) {
            if (matrix[i][j] % 2 === 0) {
                sum += matrix[i][j];
            }
        }
    }
    return sum
}
console.log(findSumOfEvenNumbers([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 20, 15, 16]
]))