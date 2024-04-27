export const RenderWeatherIcon = icon => {
  switch (icon) {
    case '01d':
      return 'CLEAR_DAY';
    case '01n':
      return 'CLEAR_NIGHT';
    case '02d':
      return 'PARTLY_CLOUDY_DAY';
    case '02n':
      return 'PARTLY_CLOUDY_NIGHT';
    case '03d':
    case '03n':
      return 'CLOUDY';
    case '04d':
    case '04n':
      return 'CLOUDY';
    case '09d':
    case '09n':
      return 'RAIN';
    case '10d':
      return 'RAIN';
    case '10n':
      return 'RAIN';
    case '11d':
    case '11n':
      return 'RAIN';
    case '13d':
    case '13n':
      return 'SNOW';
    case '50d':
    case '50n':
      return 'FOG';
    default:
      return 'CLEAR_DAY';
  }
};
