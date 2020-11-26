import React from 'react';
import PropTypes from 'prop-types';
import { fetchWeather } from '../../../lib/open-weather-map';
import Form from './form';
import FormResult from './form-result';

const WeatherForm = ({ apiKey }) => {
  const [weatherData, setWeatherData] = React.useState({
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: '',
  });

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value || 'Madrid';
    const country = e.target.elements.country.value || 'es';
    const data = await fetchWeather(city, country, apiKey);

    if (city && country) {
      setWeatherData({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
      });
    } else {
      setWeatherData({
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
    <div className="col-7 form-container">
      <Form onSubmit={getWeather} />
      <FormResult {...weatherData} />
    </div>
  );
};

WeatherForm.propTypes = {
  apiKey: PropTypes.string.isRequired,
};

export default WeatherForm;
