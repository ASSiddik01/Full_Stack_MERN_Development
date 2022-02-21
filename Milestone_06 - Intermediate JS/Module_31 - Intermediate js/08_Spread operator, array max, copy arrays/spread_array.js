const numbers = [23,44,34,65,21,99,66,54,43];

const max = Math.max(...numbers);
console.log(max);

const numbers2 = [...numbers,88]
numbers2.push(44);
console.log(numbers2);