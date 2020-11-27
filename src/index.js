import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/features/header';
import WeatherForm from './components/features/weather-form';
import { fetchWeather } from './lib/open-weather-map';
import './App.css';

const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

const App = () => {
  const handleWeatherFormRequestWeather = (city, country) =>
    fetchWeather(city, country, REACT_APP_OPENWEATHERMAP_API_KEY);

  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container-fluid">
            <div className="row">
              <Header />
              <WeatherForm onRequestWeather={handleWeatherFormRequestWeather} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
