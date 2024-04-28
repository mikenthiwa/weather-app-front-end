import { act } from 'react';
import { render, screen } from '@testing-library/react';
import CurrentWeather from './CurrentWeather.component';
import { useWeather } from '../context/WeatherContext';

jest.mock('../context/WeatherContext', () => ({
  useWeather: jest.fn(),
}));

describe('CurrentWeather Component Tests', () => {
  beforeEach(() => {
    // Set up what `useWeather` should return for these tests
    useWeather.mockReturnValue({
      weatherData: {
        weather: [{ icon: '01d', main: 'Clear', description: 'clear sky' }],
        main: {
          temp: 294.15,
          temp_min: 289.15,
          temp_max: 299.15,
          humidity: 36,
        },
        wind: { speed: 3.6 },
        name: 'Nairobi',
        dt: 1605280364,
      },
      translate: jest.fn(key => {
        const translations = {
          high: 'High',
          wind: 'Wind',
          low: 'Low',
          humidity: 'Humidity',
        };
        return translations[key] || key;
      }),
    });
  });

  test('CurrentWeather displays the correct city name', () => {
    act(() => {
      render(<CurrentWeather />);
    });
    expect(screen.getByText('Nairobi')).toBeInTheDocument();
  });

  test('CurrentWeather shows correct weather details', () => {
    act(() => {
      render(<CurrentWeather />);
    });
    expect(screen.getByText('High')).toBeInTheDocument();
    expect(screen.getByText('36%')).toBeInTheDocument();
    expect(screen.getByText('3.6 m/s')).toBeInTheDocument();
  });
});

describe('CurrentWeather Component Loading State', () => {
  it('displays loading indicator when weather data is not available', () => {
    // Configure the mock to return null for weatherData
    useWeather.mockReturnValue({
      weatherData: null,
      translate: jest.fn(),
    });

    render(<CurrentWeather />);

    const loadingIndicator = screen.getByLabelText('circles-loading');
    expect(loadingIndicator).toBeInTheDocument();
  });
});
