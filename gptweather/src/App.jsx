import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const api = {
    key: "9f41e63fa97810957bd818fa45407f5c",
    base: "https://api.openweathermap.org/data/2.5/"
  };

  const search = (evt) => {
    if (evt.key === "Enter" || evt.type === "click") {
      setLoading(true);
      setError('');
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=uz`)
        .then(res => {
          if (!res.ok) throw new Error("Shahar topilmadi!");
          return res.json();
        })
        .then(result => {
          setWeather(result);
          setQuery('');
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
          setWeather({});
        });
    }
  };

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Shahar nomini yozing..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyDown={search}  />
      
          <button className="search-btn" onClick={search}>Qidirish</button>
        </div>

        {loading && <div className="loading">Yuklanmoqda...</div>}
        {error && <div className="error-msg">{error}</div>}

        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{new Date().toDateString()}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">{weather.weather[0].description}</div>
            <div className="details">
              <p>Namlik: {weather.main.humidity}%</p>
              <p>Shamol: {weather.wind.speed} m/s</p>
            </div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;