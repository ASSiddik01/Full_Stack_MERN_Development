// Function declear
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

// Function expression
const add2 = function add2(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

// Function expression (anonymous)
const add3 = function (num1, num2) {
    const sum = num1 + num2;
    return sum;
}

// Arrow function
const add4 = (num1, num2) => num1 + num2;


const sum1 = add(15, 10);
const sum2 = add2(15, 10);
const sum3 = add3(15, 10);
const sum4 = add4(15, 10);
console.log(sum1, sum2, sum3, sum4);