import ReactAnimatedWeather from 'react-animated-weather';
import moment from 'moment';
import { useWeather } from '../context/WeatherContext';
import { RenderWeatherIcon } from '../helper';
import _ from 'lodash';
import { ColorRing } from 'react-loader-spinner';
import './CurrentWeather.scss';

const CurrentWeather = () => {
  const { weatherData, translate } = useWeather();
  if (!weatherData)
    return (
      <ColorRing color="#fff" ariaLabel="circles-loading" visible={true} />
    );

  const { weather, main, name, dt, wind } = weatherData;
  const [data] = weather;
  const getWeatherIcon = RenderWeatherIcon(data.icon);

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
            icon={_.upperCase(data.main) || getWeatherIcon}
            size={100}
            animate={true}
            color={'#fff'}
          />
          <div className="current-weather__body__temp">
            <div>{Math.round(main.temp - 273.15)}°</div>
            <small>{_.upperFirst(data.description)}</small>
          </div>
        </div>

        <hr />

        <div className="current-weather__body__meta-details">
          <div className="current-weather__body__meta-details__row">
            <div className="current-weather__body__meta-details__row__item row-1">
              <div> {translate('high')}</div>
              <div>{Math.round(main.temp_max - 273.15)}°C</div>
            </div>

            <div className="current-weather__body__meta-details__row__item">
              <div>{translate('wind')}</div>
              <div>{wind.speed} m/s</div>
            </div>
          </div>

          <div className="current-weather__body__meta-details__row">
            <div className="current-weather__body__meta-details__row__item">
              <div>{translate('low')}</div>
              <div>{Math.round(main.temp_min - 273.15)}°C</div>
            </div>

            <div className="current-weather__body__meta-details__row__item">
              <div>{translate('humidity')}</div>
              <div>{main.humidity}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
