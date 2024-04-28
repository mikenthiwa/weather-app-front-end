import { render, screen, fireEvent } from '@testing-library/react';
import HeaderComponent from './header.component';
import { useWeather } from '../context/WeatherContext';

jest.mock('../context/WeatherContext', () => ({
  useWeather: jest.fn(),
}));

describe('HeaderComponent Tests', () => {
  it('displays English as active when language is initially set to "en"', () => {
    useWeather.mockReturnValue({
      language: 'en',
      setLanguage: jest.fn(),
    });

    render(<HeaderComponent />);
    const englishTab = screen.getByText('English');
    const kiswahiliTab = screen.getByText('Swahili');

    expect(englishTab.className).toContain('active');
    expect(kiswahiliTab.className).toContain('inactive');
  });

  it('toggles language to Swahili when the Swahili tab is clicked', () => {
    const setLanguage = jest.fn();
    useWeather.mockReturnValue({
      language: 'en',
      setLanguage,
    });

    render(<HeaderComponent />);
    const englishTab = screen.getByText('English');
    fireEvent.click(englishTab);

    expect(setLanguage).toHaveBeenCalledWith('sw');
  });

  it('toggles language to English when the English tab is clicked', () => {
    const setLanguage = jest.fn();
    useWeather.mockReturnValue({
      language: 'sw',
      setLanguage,
    });

    render(<HeaderComponent />);
    const kiswahiliTab = screen.getByText('Swahili');
    fireEvent.click(kiswahiliTab);

    expect(setLanguage).toHaveBeenCalledWith('en');
  });
});
