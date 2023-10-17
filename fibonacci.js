function getFibonacci(n) {
    let previousNum = 0;
    let currentNum = 1;
    let fibonacci = [previousNum, currentNum];
    for (let i = 2; i < n; i++) {
        let nextNum = previousNum + currentNum;
        previousNum = currentNum;
        currentNum = nextNum;
        fibonacci.push(nextNum);
    }
    console.log(fibonacci)
}
getFibonacci(10)
