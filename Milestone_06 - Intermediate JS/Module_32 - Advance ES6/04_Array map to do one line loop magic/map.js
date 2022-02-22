const nums = [2, 4, 6, 8];

let output = [];

// Nornal Method
for (const num of nums) {
    const result = num * 2
    output.push(result);
}
console.log(output);

// Map Method
const result = nums.map(num => num * 2);
console.log(result);