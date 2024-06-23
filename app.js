const apiKey = '8cf689bd1a7cafea1c8c8ea52707a6e4';
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const currentWeatherDetails = document.getElementById('current-weather-details');
const forecastDetails = document.getElementById('forecast-details');
const historyList = document.getElementById('history-list');

const getWeatherData = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  );
  const data = await response.json();
  return data;
};

const getForecastData = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
  );
  const data = await response.json();
  return data;
};

const displayCurrentWeather = (data) => {
  const { name, weather, main, wind, dt } = data;
  const date = new Date(dt * 1000).toLocaleDateString();
  currentWeatherDetails.innerHTML = `
    <div class="weather-card">
            <h3>${name}</h3>
            <p>${date}</p>
            <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].description}">
            <p>Temp: ${main.temp} °F</p>
            <p>Humidity: ${main.humidity} %</p>
            <p>Wind: ${wind.speed} mph</p>
        </div>`;
};

const displayForecast = (data) => {
  forecastDetails.innerHTML = '';
  const forecastList = data.list.filter((_, index) => index % 8 === 0);
  forecastList.forEach((item) => {
    const { dt, main, weather, wind } = item;
    const date = new Date(dt * 1000).toDateString();
    forecastDetails.innerHTML += `
        <div class="weather-card">
                <p>${date}</p>
                <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}">
                <p>Temp: ${main.temp} °F</p>
                <p>Humidity: ${main.humidity} %</p>
                <p>Wind: ${wind.speed} mph</p>
            </div>`;
  });
};

const updateHistory = (city) => {
  let history = JSON.parse(localStorage.getItem('history')) || [];
  if (!history.includes(city)) {
    history.push(city);
    localStorage.setItem('history', JSON.stringify(history));
  }
  displayHistory();
};

const displayHistory = () => {
  historyList.innerHTML = '';
  let history = JSON.parse(localStorage.getItem('history')) || [];
  history.forEach((city) => {
    const historyItem = document.createElement('li');
    historyItem.classList.add('history-item');
    historyItem.textContent = city;
    historyItem.addEventListener('click', () => {
      fetchWeather(city);
    });
    historyList.appendChild(historyItem);
  });
};

const fetchWeather = async (city) => {
  const currentData = await getWeatherData(city);
  if (currentData.coord) {
    displayCurrentWeather(currentData);
    const { coord } = currentData;
    const forecastData = await getForecastData(coord.lat, coord.lon);
    displayForecast(forecastData);
    updateHistory(city);
  } else {
    console.error('coordinates not found for the specified city.');
  }
};

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value;
  fetchWeather(city);
  cityInput.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  displayHistory();
});
