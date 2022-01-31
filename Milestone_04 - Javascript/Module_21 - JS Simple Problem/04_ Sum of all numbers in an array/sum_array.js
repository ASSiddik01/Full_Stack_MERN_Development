let numbers = [23, 53, 64, 23, 12, 64, 26, 74];

function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum += element;
    }
    console.log(sum);
}

arrayTotal(numbers);