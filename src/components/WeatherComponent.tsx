import React, { useState } from 'react';
import styles from './WeatherComponent.module.css';

const WeatherComponent: React.FC = () => {
  const [cityName, setCityName] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any>(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c1b7db0a4e1ff49a010c1ea12c81c274&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
            console.error("Error fetching weather data: ", error);
      }
  };

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.weatherInner}>
        <div className={styles.searchBar}>
          <input 
            type="text" 
            id="cityName" 
            placeholder="도시 이름을 입력하세요" 
            value={cityName} 
            onChange={(e) => setCityName(e.target.value)} 
          />
        <button onClick={handleSearch}>검색</button>
      </div>
        {weatherData && (
          <>
            <div className={styles.area}>{weatherData.name}</div>
            <div id="description">{weatherData.weather[0].description}</div>
            <div id="clouds">구름: {weatherData.clouds.all}%</div>
            <div id="wind">풍속: {weatherData.wind.speed} m/s</div>
            <div id="feels_like">체감 온도: {weatherData.main.feels_like}°C</div>
            <div id="humidity">습도: {weatherData.main.humidity}%</div>
            <div id="pressure">Pressure: {weatherData.main.pressure} hPa</div>
            <div id="temp">기온: {weatherData.main.temp}°C</div>
            <div id="temp_max">최고 기온: {weatherData.main.temp_max}°C</div>
            <div id="temp_min">최저 기온: {weatherData.main.temp_min}°C</div>
            <div>
              <img 
                id="weatherIcon" 
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} 
                alt="현재 날씨 아이콘" 
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherComponent;