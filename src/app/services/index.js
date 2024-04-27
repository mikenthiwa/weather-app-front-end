import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Create an axios instance
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// export instance
export default instance;
