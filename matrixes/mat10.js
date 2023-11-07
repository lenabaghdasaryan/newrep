// 429
function findAmountOfMentionedNumbers(matrix) {
    let count = 0;
    let k = 5;
    for (i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length - 1 - i; j++) {
            if (matrix[i][j] % k === 2) {
                count++
            }
        }
    }
    return count
}
console.log(findAmountOfMentionedNumbers([
    [1, 6, 3, 4],
    [2, 6, 7, 8],
    [7, 10, 11, 12],
    [13, 20, 15, 16]
]))