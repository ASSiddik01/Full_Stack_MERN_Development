function largeString(names) {
    // Array check
    if (Array.isArray(names) == false) {
        return 'Provide an array';
    }
    // Array store
    let string = [];
    // Find large string
    for (const name of names) {
        if (name.length > string.length) {
            string = name;
        }
    }

    return string;
}

const friends = ['Shama', 'Shakib', 'Mosabbir', 'Sweet'];

console.log(largeString(friends));

// Find Name by index !
if (friends.indexOf('Sweet') != -1) {
    console.log("Sweet present");
}
// Find Name by includes !
if (friends.includes('Shakib')) {
    console.log("Shakib present");
}

// Array joind by concat
const about1 = ['My', 'name', 'is', 'Shama'];
const about2 = ['I', 'come', 'from', 'Chuadanga'];

console.log(about1.concat(about2));