function addNumbers(num1, num2) {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    // const result = num1 + num2;
    return result;
}

console.log(addNumbers(23, 20, 45));