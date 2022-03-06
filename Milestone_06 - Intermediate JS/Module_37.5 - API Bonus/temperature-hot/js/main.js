// https://home.openweathermap.org/ sign in and generate API key

// Step:1
const key = `d5797a6e87cc144e247d7adbc20791a5`;
// step:2
const searchTemperature = () => {
    const cityName = document.getElementById('city_name').value;
    // step:3
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;

    // step:8
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;

    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data));
        // step:5
        .then(data => displayTemperature(data));
}

// Display data
// step:4
const displayTemperature = tempareture => {
    // console.log(tempareture);
    // step:7 update data
    setInnerText('city', tempareture.name);
    setInnerText('temp', tempareture.main.temp);
    setInnerText('weather', tempareture.weather[0].main);

    // step 9 set weather_icon
    const iconUrl = `http://openweathermap.org/img/wn/${tempareture.weather[0].icon}@2x.png`
    const icon = document.getElementById('weather_icon');
    icon.setAttribute('src', iconUrl);
}
// step:6
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}