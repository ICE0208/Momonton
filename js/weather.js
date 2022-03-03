function apikeyError(){
    const city = document.querySelector("#weatherinfo span:first-child");
    city.innerText = "Earth ,";
    const weather = document.querySelector("#weatherinfo span:last-child");
    weather.innerText = "Global Warming";

    const weatherinfo = document.querySelector("#weatherinfo");
    // set #weatherinfo's title
    weatherinfo.title = "API Key Error";
}

function onGeoOk(position){
    // You need to create js/config.js file with your API key
    // const WEATHER_APIKEY = `${Your API Key}`;
    if (typeof(WEATHER_APIKEY) === 'undefined') {
        console.log("WEATHER_APIKEY Is Not Defined");
        return apikeyError();
    }

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_APIKEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        const city = document.querySelector("#weatherinfo span:first-child");
        const weather = document.querySelector("#weatherinfo span:last-child");
        city.innerText = data.name + " ,";
        weather.innerText = `${Math.floor(data.main.temp*10) / 10}° ${data.weather[0].main}`;
        weatherinfo.title = "";
    })).catch(error => {
        console.log("fetch error: " + error);
        apikeyError();
    });
}
function onGeoError(){
    const city = document.querySelector("#weatherinfo span:first-child");
    city.innerText = "Earth ,";
    const weather = document.querySelector("#weatherinfo span:last-child");
    weather.innerText = "Global Warming";

    const weatherinfo = document.querySelector("#weatherinfo");
    // set #weatherinfo's title
    weatherinfo.title = "Can't Find your location";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);