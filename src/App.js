import './App.scss';
import BaseLayout from './app/components/BaseLayout.component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WeatherProvider from './app/context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <BaseLayout>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BaseLayout>
    </WeatherProvider>
  );
}

export default App;
