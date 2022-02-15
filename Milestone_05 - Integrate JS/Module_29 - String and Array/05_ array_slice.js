const numbers = [1, 4, 7, 5, 32, 11, 34, 65, 43, 87];
// Array cut by index number
const numbersSlice = numbers.slice(2, 6);

// Remove element from an array index length
// const numbersSpliced = numbers.splice(2, 6);
// console.log(numbersSpliced);
// console.log(numbers);

// Remove and element from an array index length
const numbersSpliced = numbers.splice(2, 6,45,23,43,24);
console.log(numbersSpliced);
console.log(numbers);