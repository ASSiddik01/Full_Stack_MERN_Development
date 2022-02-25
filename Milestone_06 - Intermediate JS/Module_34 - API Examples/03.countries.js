// Step 1
const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
        // Step 3
        .then(data => displayCountries(data))
}
loadCountries();

// Step 2
const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries')
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <!-- step 5 -->
            <button onclick="loadDetiles('${country.name}')">Detiles</button>
        `;
        countriesContainer.appendChild(div);
    })
}

// step 4
const loadDetiles = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data[0]))

        // Step 7
        .then(data => displayDetiles(data[0]))
    
}

// Step 6
const displayDetiles = country => {
    // Step 8
    // console.log(country);

    // Step 9
    const detaileDiv = document.getElementById('detailes');
    detaileDiv.innerHTML = `
        <h3>${country.name}</h3>
        <p>Currency: ${country.currencies[0].code}</p>
        <p>Dial code: ${country.callingCodes[0]}</p>
        <img width="300px" src="${country.flag}"></img>
    `
}