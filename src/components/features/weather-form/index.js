import React from 'react';
import PropTypes from 'prop-types';
import Form from './form';
import FormResult from './form-result';
import useLocalStorage from '../../hooks/use-local-storage';

const WeatherForm = ({ onRequestWeather }) => {
  const [cachedResult, setCachedResult] = useLocalStorage('result-cache', {});
  const [weatherData, setWeatherData] = React.useState({
    temperature: cachedResult?.temperature,
    city: cachedResult?.city,
    country: cachedResult?.country,
    humidity: cachedResult?.humidity,
    description: cachedResult?.description,
    error: undefined,
  });

  const showError = (error) => {
    setWeatherData({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error,
    });
  };

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {
      try {
        const data = await onRequestWeather(city, country);

        const newState = {
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: undefined,
        };
        setWeatherData(newState);
        setCachedResult(newState);
      } catch (e) {
        showError('Sorry, we did not find this city and/or country.');
      }
    } else {
      showError('Please enter the values.');
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
  onRequestWeather: PropTypes.func.isRequired,
};

export default WeatherForm;
