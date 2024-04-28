import { createContext, useState, useContext, useEffect } from 'react';
import { fetchWeatherByCity } from '../services/weather.service';
import en from '../../locales/en.json';
import sw from '../../locales/sw.json';

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

const WeatherProvider = ({ children }) => {
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

export default WeatherProvider;
