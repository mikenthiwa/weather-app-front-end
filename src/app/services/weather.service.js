import { WeatherData } from '../mocks/mock-data';
import WeatherApi from './index';

const API_KEY = '83e42b02147e6c7ff20b67fac40c9c3a';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherByCity = async city => {
  try {
    const response = await WeatherApi.get(
      `${BASE_URL}?q=${city}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data: ', error);
  }
};
