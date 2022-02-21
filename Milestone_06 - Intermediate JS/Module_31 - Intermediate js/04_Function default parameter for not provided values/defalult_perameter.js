function add(num1, num2 = 0) {
    console.log(num1, num2)
    // Option 2
    // num2 = num2 || 0

    // Option 1
    // if (num2 == undefined) {
    //     num2 = 0
    // }
    return num1 + num2;
}

const sum = add(12);
console.log(sum);