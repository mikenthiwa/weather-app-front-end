import { createContext, useState, useContext, useEffect } from 'react';
import { fetchWeatherByCity } from '../services/weather.service';
import en from '../../locales/en.json';
import sw from '../../locales/sw.json';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || '';
const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [language, setLanguage] = useState('en');

  const translate = key => (language === 'en' ? en[key] : sw[key]);

  useEffect(() => {
    fetchWeatherByCity('Nairobi').then(data => {
      setWeatherData(data);
    });
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        fetchWeatherByCity,
        language,
        setLanguage,
        translate,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
