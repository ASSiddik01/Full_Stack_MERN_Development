/*
Primitive data types
1.nubmer
2.string
3.boolean
4.undefind
5.null
6.symbol

Non-premetive data type
7. object
*/

// Primitive data types
let a = "Hello";
let b = a;
console.log(a, b);

a = "Bye"
console.log(a, b);


// Non-premetive data type

let x = { Job: "Web developer" };
const y = x;
console.log(x, y);
y.Job = 'front end developer';
console.log(x, y);
