// Skip

function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
};

let clock = stopWatch();
console.log(clock());
console.log(clock());
console.log(clock());
console.log(clock());
console.log(clock());
console.log(clock());