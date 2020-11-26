import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { fetchWeather } from './lib/open-weather-map';

const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

const App = () => {
  const [state, setState] = React.useState({
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  });

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value || 'Madrid';
    const country = e.target.elements.country.value || 'es';
    const api_call = await fetchWeather(
      city,
      country,
      REACT_APP_OPENWEATHERMAP_API_KEY
    );
    const data = await api_call.json();
    if (city && country) {
      setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
      });
    } else {
      setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the values.',
      });
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-5 title-container">
                <div>
                  <h1 className="title-container__title">Weather Finder</h1>
                  <h3 className="title-container__subtitle">
                    Find out temperature, conditions and more...
                  </h3>
                </div>
              </div>
              <div className="col-7 form-container">
                <form onSubmit={getWeather}>
                  <input type="text" name="city" placeholder="Madrid" />
                  <input type="text" name="country" placeholder="es" />
                  <button>Get Weather</button>
                </form>
                <div className="weather__info">
                  {state.city && state.country && (
                    <p className="weather__key">
                      {' '}
                      Location:
                      <span className="weather__value">
                        {' '}
                        {state.city}, {state.country}
                      </span>
                    </p>
                  )}
                  {state.temperature && (
                    <p className="weather__key">
                      {' '}
                      Temperature:
                      <span className="weather__value">
                        {' '}
                        {state.temperature}{' '}
                      </span>
                    </p>
                  )}
                  {state.humidity && (
                    <p className="weather__key">
                      {' '}
                      Humidity:
                      <span className="weather__value"> {state.humidity} </span>
                    </p>
                  )}
                  {state.description && (
                    <p className="weather__key">
                      {' '}
                      Conditions:
                      <span className="weather__value">
                        {' '}
                        {state.description}{' '}
                      </span>
                    </p>
                  )}
                  {state.error && (
                    <p className="weather__error">{state.error}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
