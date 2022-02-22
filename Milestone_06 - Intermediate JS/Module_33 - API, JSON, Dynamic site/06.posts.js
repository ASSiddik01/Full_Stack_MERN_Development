// Display Post
// Step 1
function posts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
posts();

// Step 2
function displayPost(posts) {
    const postContainer = document.getElementById('posts')
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}
