// Create a function that takes a number as an argument and returns the highest digit in 
// that number.
// Examples:
// highestDigit(379) ➞ 9
// highestDigit(2) ➞ 2
// highestDigit(377401) ➞ 7

function getHighestNum(num) {

    const newNum = String(num);
    const arr = newNum.split('');
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr[arr.length - 1]
}
console.log(getHighestNum(325))