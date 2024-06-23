# Tru_Weather_Dashboard

## Description

The Weather Dashboard is a web application that allows users to search for weather information in multiple cities. The application displays the current weather conditions as well as a 5-day forecast for the searched city. It also maintains a search history, enabling users to quickly revisit the weather data for previously searched cities.

## Features

- Search for current and future weather conditions in any city.
- View current weather conditions including city name, date, weather icon, temperature, humidity, and wind speed.
- View a 5-day weather forecast including date, weather icon, temperature, humidity, and wind speed.
- Search history functionality to quickly access previously searched cities.
- Responsive design for optimal viewing on various devices.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-dashboard
   ```
3. Open `index.html` in your preferred web browser.

## Usage

1. Open the Weather Dashboard in your web browser.
2. Enter the name of a city in the search input and click the "Search" button.
3. View the current weather conditions and the 5-day forecast for the searched city.
4. Click on a city in the search history to view its weather information again.

## API Key

This project retrieves weather data from the [OpenWeatherMap API](https://openweathermap.org/api). You need to obtain an API key from OpenWeatherMap and add it to the `app.js` file:

1. Go to [OpenWeatherMap](https://openweathermap.org/appid) and sign up for an API key.
2. Replace `'YOUR_API_KEY'` in the `app.js` file with your actual API key:
   ```javascript
   const apiKey = 'YOUR_API_KEY';
   ```

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
