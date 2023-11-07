// 423
function findAverageSqrt(matrix) {
    let k = 2;
    let count = 0;
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            if (matrix[i][j] % k === 0) {
                sum += Math.pow(matrix[i][j],2)
                count++
            }
        }
    }
    return Math.sqrt(sum / count)

}
console.log(findAverageSqrt([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 20, 15, 16]
]))