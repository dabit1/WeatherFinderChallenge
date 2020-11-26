import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/features/header';
import WeatherForm from './components/features/weather-form';
import './App.css';

const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

const App = () => (
  <div>
    <div className="wrapper">
      <div className="main">
        <div className="container-fluid">
          <div className="row">
            <Header />
            <WeatherForm apiKey={REACT_APP_OPENWEATHERMAP_API_KEY} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
