import './header.scss';
import { useWeather } from '../context/WeatherContext';

const HeaderComponent = () => {
  const { language, setLanguage } = useWeather();

  const languageToggle = () => {
    setLanguage(language === 'en' ? 'sw' : 'en');
  };

  return (
    <div className="header">
      <div className="toggle-container">
        <div
          className={`${language === 'en' ? 'active' : 'inactive'}`}
          onClick={languageToggle}
        >
          English
        </div>
        <div
          className={`${language === 'sw' ? 'active' : 'inactive'}`}
          onClick={languageToggle}
        >
          Swahili
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
