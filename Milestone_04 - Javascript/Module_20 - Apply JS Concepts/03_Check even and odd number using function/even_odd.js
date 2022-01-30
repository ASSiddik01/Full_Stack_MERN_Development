// Even Number check

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

var myNumber = isEven(34);
console.log('Is my number is even,', myNumber);

// Odd Number

function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false
}

var myNumber = isOdd(45);
console.log('Is my number is odd,', myNumber);

