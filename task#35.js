async function getWeather() {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            document.getElementById("temp").textContent = data.main.temp;
            document.getElementById("pressure").textContent = data.main.pressure;
            document.getElementById("description").textContent = data.weather[0].description;
            document.getElementById("humidity").textContent = data.main.humidity;
            document.getElementById("speed").textContent = data.wind.speed;
            document.getElementById("deg").textContent = data.wind.deg;
        } else {
            console.error("Помилка при виконанні запиту");
        }
    } catch (error) {
        console.error("Помилка:", error);
    }
}

getWeather();