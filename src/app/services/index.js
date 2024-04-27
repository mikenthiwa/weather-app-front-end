import axios from 'axios';

const BASE_URL = process.env.REACT_APP_WEATHER_API_URL;

// Create an axios instance
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// export instance
export default instance;
