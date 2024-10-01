import { useState } from "react";
import axios from "axios";  // Make sure axios is imported

const App = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(null);

  const API_key = "05a4f13388d24c8623f200239c75c034";  // Corrected the variable name

  const handleSearch = async () => {
    if (city.trim() === "") {
      setError("Please add city");
      return;
    }

    try {
      // Use the city name for the API request, not hardcoded coordinates
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`); // Fetches weather for city
      setWeather(res.data);
      setError("");
    } catch (error) {
      setError("Error fetching weather data");
      setWeather(null);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {error && <h1>{error}</h1>}

        {weather && (
          <div className="weather-info">
            <h2>{weather.name}, {weather.sys.country}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
