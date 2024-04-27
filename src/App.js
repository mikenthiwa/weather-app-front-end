import './App.scss';
import CurrentWeather from './app/components/CurrentWeather.component';
import BaseLayout from './app/components/BaseLayout.component';
import { fetchWeatherByCity } from './app/services/weather.service';
import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherByCity('Nairobi').then(data => {
      setWeatherData(data);
    });
  }, []);

  return (
    <BaseLayout>
      {weatherData ? (
        <CurrentWeather
          weather={weatherData.weather}
          dt={weatherData.dt}
          main={weatherData.main}
          name={weatherData.name}
          wind={weatherData.wind}
        />
      ) : (
        <div className="loading">
          <ColorRing color="#fff" ariaLabel="circles-loading" visible={true} />
        </div>
      )}
    </BaseLayout>
  );
}

export default App;
