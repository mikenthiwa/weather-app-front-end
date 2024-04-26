import logo from './logo.svg';
import './App.scss';
import CurrentWeather from './app/components/CurrentWeather.component';
import { WeatherData } from './app/mocks/mock-data';
import BaseLayout from './app/components/BaseLayout.component';

function App() {
  return (
    <BaseLayout>
      <CurrentWeather
        weather={WeatherData.weather}
        dt={WeatherData.dt}
        main={WeatherData.main}
        name={WeatherData.name}
        wind={WeatherData.wind}
      />
    </BaseLayout>
  );
}

export default App;
