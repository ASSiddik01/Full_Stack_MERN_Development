// Step 1 serarch json placeholder and copy data
// 


// Step 3
function loadData() {
    // Setp 2
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

}

// Load Users

// Step 4
function loadUsers() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // .then(users => console.log(users))
        .then(users => displayData(users))

}

// Load Post

// Step 5
function loadPosts() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => console.log(posts))

}

// Step 6
function displayData(users) {
    // console.log(users);
    // Setp 8
    const ul = document.getElementById('users');

    // Step 7
    for (const user of users) {
        // console.log(user.name);

        // Step 9
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name} :: Email: ${user.email}`;
        ul.appendChild(li);

    }
}