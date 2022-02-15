const number = [3, 2, 5, 66, 1, 4, 9, 7, 8];

// First to last short
// console.log(number.sort());

// Last to first short
// console.log(number.reverse());

// Array sort reverse way
// console.log(number.sort().reverse());

// Sort dubbol character
console.log(number.sort(function (a, b) {
    return a - b;
}))
