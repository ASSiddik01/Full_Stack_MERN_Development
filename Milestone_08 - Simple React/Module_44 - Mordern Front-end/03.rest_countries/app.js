// Step 1: load API data
const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        // .then(data => console.log(data));
        // Step 3: Send loaded data
        .then(data => displayData(data));
}
// loadCountry(); 


// Step 2: Display Data
const displayData = countries => {
    const countriesHTML = countries.map(country => countryHTML(country));
    // console.log(countriesHTML[0]);
    // Step 5: Show on UI
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join('');
}

// Step 4: Single Country
const countryHTML = country => {
    console.log(country);
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}" >
        </div>
    `
}

loadCountry();