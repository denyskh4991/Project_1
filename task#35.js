function getWeather() {
    var xhr = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";

    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById("temp").textContent = data.main.temp;
            document.getElementById("pressure").textContent = data.main.pressure;
            document.getElementById("description").textContent = data.weather[0].description;
            document.getElementById("humidity").textContent = data.main.humidity;
            document.getElementById("speed").textContent = data.wind.speed;
            document.getElementById("deg").textContent = data.wind.deg;
            document.getElementById("icon").src = "http://openweathermap.org/img/w/10d.png";        }
    };
    xhr.send();
}

getWeather();