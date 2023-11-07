// 427
function findProdOfNumbers(matrix) {
    let prod = 1;
    let k = 3;
    for (i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length - 1 - i; j++) {
            if (matrix[i][j] % k === 0) {
                prod *= matrix[i][j];
            }
        }
    }
    return prod
}
console.log(findProdOfNumbers([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 20, 15, 16]
]))