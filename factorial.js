function factorial(num) {
    let fact1 = 1;
    let i;
    if (i == 0 || i == 1) {
        console.log(fact1)
    }
    for (i = 2; i <= num; i++) {
        fact1 *= i;
    }
    console.log(fact1);
}
factorial(5);