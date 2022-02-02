function smallestNumber(number) {
    let min = number[0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element < min) {
            min = element;
        }
    }
    console.log(min);
}

var number = [34, 25, 76, 67, 24];

smallestNumber(number);