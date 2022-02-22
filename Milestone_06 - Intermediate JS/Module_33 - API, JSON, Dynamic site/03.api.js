// Step 1 serarch json placeholder and copy data
// 


// Step 3
function loadData() {
    // Setp 2
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

}