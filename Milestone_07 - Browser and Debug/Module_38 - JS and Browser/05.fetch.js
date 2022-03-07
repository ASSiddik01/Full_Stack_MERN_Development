console.log('First');
console.log('Second');
console.log('Third');

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

console.log('Fourth');
console.log('Fifth');