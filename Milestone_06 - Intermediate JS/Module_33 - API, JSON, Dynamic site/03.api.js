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
        .then(users => console.log(users))

}

// Load Post

// Step 4
function loadPosts() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => displayPost(posts))

}

function displayPost(posts) {
    console.log(posts);
}