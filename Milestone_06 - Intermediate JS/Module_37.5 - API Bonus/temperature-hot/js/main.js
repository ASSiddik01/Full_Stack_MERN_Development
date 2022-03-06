// https://home.openweathermap.org/ sign in and generate API key
// Step:1
const key = `d5797a6e87cc144e247d7adbc20791a5`;
// step:2
const searchTemperature = () => {
    const cityName = document.getElementById('city_name').value;
    // step:3
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
    
    fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data));
        // step:5
    .then(data => console.log(data));
}

// step:4
const displayTemperature = tempareture => {
    console.log(tempareture);
}
