const loadQuote = () => {
    // Step 1
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        
        // .then(data => console.log(data))
        
        // Step 3
        .then(data => displayQuote(data))
}

// Step 2
const displayQuote = data => {
    const quoteElement = document.getElementById('quote')
    quoteElement.innerText = data.quote;
}