import ReactAnimatedWeather from 'react-animated-weather';
import { RenderWeatherIcon } from '../helper';
import _ from 'lodash';
import moment from 'moment';
import './CurrentWeather.scss';

const CurrentWeather = ({ weather, main, name, dt, wind }) => {
  const [weatherData] = weather;
  const getWeatherIcon = RenderWeatherIcon(weatherData.icon);
  return (
    <div className="current-weather">
      <div className="current-weather__header">
        <h2 className="current-weather__header__city">{name}</h2>
        <small className="current-weather__header__date">
          {moment.unix(dt).format('dddd, MMMM Do YYYY')}
        </small>
      </div>
      <div className="current-weather__body">
        <div className="current-weather__body__details">
          <ReactAnimatedWeather
            className="icon"
            icon={getWeatherIcon}
            size={100}
            animate={true}
            color={'#fff'}
          />
          <div className="current-weather__body__temp">
            <div>{Math.round(main.temp - 273.15)}°</div>
            <small>{_.upperFirst(weatherData.description)}</small>
          </div>
        </div>

        <hr />

        <div className="current-weather__body__meta-details">
          <div className="current-weather__body__meta-details__row">
            <div className="current-weather__body__meta-details__row__item row-1">
              <div>High</div>
              <div>{Math.round(main.temp_max - 273.15)}°C</div>
            </div>

            <div className="current-weather__body__meta-details__row__item">
              <div>Wind</div>
              <div>{wind.speed} m/s</div>
            </div>
          </div>

          <div className="current-weather__body__meta-details__row">
            <div className="current-weather__body__meta-details__row__item">
              <div>Low</div>
              <div>{Math.round(main.temp_min - 273.15)}°C</div>
            </div>

            <div className="current-weather__body__meta-details__row__item">
              <div>Humidity</div>
              <div>{main.humidity}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
