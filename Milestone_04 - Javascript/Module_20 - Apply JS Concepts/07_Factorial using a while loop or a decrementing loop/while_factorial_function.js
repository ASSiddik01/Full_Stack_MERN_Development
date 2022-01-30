function factorialCheck(number) {
    var factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }

    console.log(factorial);
}

factorialCheck(6);

function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    console.log(factorial);
}

getFactorial(5);
