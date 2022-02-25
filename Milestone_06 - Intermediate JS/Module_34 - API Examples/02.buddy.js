const loadBuddis = () => {
    // Step 1
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        // .then(data => console.log(data))
        // Step 3
        .then(data => displayBuddies(data))
}

// Step 2
const displayBuddies = data => {
    // Step 4
    // console.log(data.results);

    // Step 5
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');

    // Step 7
    buddiesDiv.innerText = '';
    
    // Step 6
    for (const buddy of buddies) {
        console.log(buddy.email);
        const p = document.createElement('p');
        p.innerText = `
            Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} :: Email: ${buddy.email}
        `;
        buddiesDiv.appendChild(p)
    }

        
}