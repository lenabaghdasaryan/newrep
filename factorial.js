function factorial(num) {

    if (num === 0 || num === 1) return 1

    let fact1 = 1;

    for (i = 2; i <= num; i++) {
        fact1 *= i;
    }

    return fact1
}

factorial(1);