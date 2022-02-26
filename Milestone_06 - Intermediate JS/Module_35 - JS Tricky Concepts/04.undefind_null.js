/* 
1. variable value not assigned
2. function but didn't write return 
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleted array element
8. explicitly set value to undefined
9. Null means value is not present
*/


let x;
// console.log(x);

function sum(x, y) {
    const add = x + y;
}
// console.log(sum(5,6));

function sum(x, y) {
    const add = x + y;
    return
}
// console.log(sum(5,6));

function sum(x, y) {
    const add = x + y;
    return
}
// console.log(sum(5));


const object = { name: 'Shama', age: 23, location: 'Rangpur' };
// console.log(object.phone);


const array = [33, 44, 22, 11];
// console.log(array[5]);

delete array[2];
// console.log(array);
// console.log(array[5]);

const value = undefined;
// console.log(value);

const Shama = {
    name: 'Abu Shama',
    location: 'Chuadanga',
    age: '23',
    occupation: null
}

console.log(Shama);




