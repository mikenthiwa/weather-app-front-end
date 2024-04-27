import HeaderComponent from './header.component';
import CurrentWeather from './CurrentWeather.component';
import './BaseLayout.scss';

const BaseLayout = ({ children }) => {
  return (
    <div className="base-layout">
      <div className="base-layout__container">
        <HeaderComponent />
        <CurrentWeather />
      </div>

      {children}
    </div>
  );
};

export default BaseLayout;
