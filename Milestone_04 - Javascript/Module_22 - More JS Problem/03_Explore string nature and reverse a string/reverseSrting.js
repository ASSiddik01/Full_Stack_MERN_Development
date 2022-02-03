let myName = 'Abu Shama';

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        
        reverse = letter + reverse;
    }
    console.log(reverse);
}

reverseString(myName);