import { apiKey } from "./key.js";

const weatherForm = document.querySelector(".weather-form");
const inputCity = document.querySelector(".input-city");
const card = document.querySelector(".card");

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = inputCity.value;
    if (city) {
        try {
            const weatherData = await getWeather(city);
            displayWeather(weatherData);
        }
        catch (error) {
            console.log(error);
            displayError(error);
        }
    }
    else {
        displayError("Please enter a city");
    }
});

async function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
        throw new Error("City not found");
    }

    return await response.json();
}

const displayWeather = (weatherData) => {
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = weatherData;
    card.textContent = "";
    card.style.display = "flex";

    const pCity = document.createElement("h1");
    const pTemperature = document.createElement("p");
    const pHumidity = document.createElement("p");
    const pDescription = document.createElement("p");
    const pWeatherEmoji = document.createElement("p");

    pCity.textContent = city;
    pTemperature.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    pHumidity.textContent = `Humidity: ${humidity}%`;
    pDescription.textContent = description;
    pWeatherEmoji.textContent = getWeatherEmoji(id);

    pCity.classList.add("city");
    pTemperature.classList.add("temperature");
    pHumidity.classList.add("humidity");
    pDescription.classList.add("description");
    pWeatherEmoji.classList.add("weather-emoji");

    card.appendChild(pCity);
    card.appendChild(pTemperature);
    card.appendChild(pHumidity);
    card.appendChild(pDescription);
    card.appendChild(pWeatherEmoji);
}

const getWeatherEmoji = (weatherId) => {
    if (weatherId >= 200 && weatherId < 300) {
        return "⛈";
    }
    else if (weatherId >= 300 && weatherId < 400) {
        return "🌧";
    }
    else if (weatherId >= 500 && weatherId < 600) {
        return "🌧";
    }
    else if (weatherId >= 600 && weatherId < 700) {
        return "❄️";
    }
    else if (weatherId >= 700 && weatherId < 800) {
        return "🌫️";
    }
    else if (weatherId === 800) {
        return "☀️";
    }
    else if (weatherId >= 801 && weatherId < 810) {
        return "☁️";
    }
    else {
        return "❓";
    }
}

const displayError = (message) => {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("error");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}