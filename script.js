function searchCity() {
    const city = searchinput.value
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b41ec3be35c7dac8aabbc21ba253137a&units=metric`)
        .then(weather => weather.json()).then(data => displayData(data)).catch(error => console.error('Error fetching data:', error));
}


function displayData(dataArray) {
    const city_name = dataArray.name
    cityname.innerHTML = `<h2 class="card-title text-center text-light mt-5" >${city_name}</h2>
`
    const temperature = dataArray.main.temp
    tempp.innerHTML = `<h5 class="text-center text-light">${temperature}°C</h5><br><br>`
    const pressure = dataArray.main.pressure
    const humidity = dataArray.main.humidity
    const wind = dataArray.wind.speed
    const cloud = dataArray.clouds.all

    const d = new Date();
    document.getElementById("demo").innerHTML = d;
    weather.innerHTML = `
            <div class="col-lg-2 col-md-2 col-sm-3">
                <i class="fa-solid fa-cloud text-light fa-2x"></i>
                <h5 class="text-light">Cloud</h5>
                <h6 class="text-light">${cloud}</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-3">
                <i class="fa-regular fa-snowflake text-light fa-2x"></i>
                <h5 class="text-light">Humidity</h5>
                <h6 class="text-light">${humidity}%</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-3">
                <i class="fa-solid fa-wind text-light fa-2x"></i>
                <h5 class="text-light">Wind</h5>
                <h6 class="text-light">${wind}</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-3">
                <i class="fa-solid fa-water text-light fa-2x"></i>
                <h5 class="text-light">Pressure</h5>
                <h6 class="text-light">${pressure}</h6>
            </div>`
}