function fibonacchi(number) {

    if (typeof number != 'number') {
        let error = 'Please, give a number';
        return error;
    }
    if (number < 2) {
        let error = 'Please, give a positive number and grater than 1';
        return error;
    }
    let fibo = [0, 1];
    for (let i = 2; i < number; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo;
}

console.log(fibonacchi(-4));