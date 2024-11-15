import { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import './styles/App.scss'

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = '380d517b00e84e81b39132917241511';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData({
        location: `${data.location.name}, ${data.location.country}`,
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
      });

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <>
      <SearchBar onSearch={fetchWeather} />
      {weatherData && (
        <WeatherCard
          location={weatherData.location}
          temp={weatherData.temp}
          condition={weatherData.condition}
          icon={weatherData.icon}
        />
      )}
      
      
    </>
  )
}

export default App
