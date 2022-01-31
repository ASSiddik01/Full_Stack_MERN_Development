function largeestElement(array) {
    let largest = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > largest) {
            largest = element;
        }
    }
    console.log(largest);
}

let age = [23, 45, 23, 64, 42, 55];

largeestElement(age);