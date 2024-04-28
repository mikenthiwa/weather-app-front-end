import WeatherApi from './index';
import { toast } from 'react-toastify';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || '';

export const fetchWeatherByCity = async city => {
  try {
    const response = await WeatherApi.get(`?q=${city}&appid=${API_KEY}`);
    if (response.status === 200) {
      return response.data;
    } else {
      // render toast notification
      toast.error('Error fetching weather data');
      throw new Error('Error fetching weather data');
    }
  } catch (error) {
    toast.error('Something went wrong!');
    throw error;
  }
};
