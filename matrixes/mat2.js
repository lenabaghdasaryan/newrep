// 422
function findArithmeticAverage(matrix) {
    let k = 5;
    let count = 0;
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            if (matrix[i][j] % k === 0) {
                sum += matrix[i][j];
                count++
            }
        }
    }
    return sum / count

}
console.log(findArithmeticAverage([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 20, 15, 16]
]))