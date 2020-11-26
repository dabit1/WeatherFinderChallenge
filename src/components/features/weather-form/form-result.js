import React from 'react';
import PropTypes from 'prop-types';
import FormResultValue from './form-result-value';

const FormResult = ({
  city,
  country,
  temperature,
  humidity,
  description,
  error,
}) => {
  return (
    <div className="weather__info">
      {city && country && (
        <FormResultValue title="Location">
          {' '}
          {city}, {country}
        </FormResultValue>
      )}
      {temperature && (
        <FormResultValue title="Temperature"> {temperature} </FormResultValue>
      )}
      {humidity && (
        <FormResultValue title="Humidity"> {humidity} </FormResultValue>
      )}
      {description && (
        <FormResultValue title="Conditions"> {description} </FormResultValue>
      )}
      {error && <p className="weather__error">{error}</p>}
    </div>
  );
};

FormResult.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  temperature: PropTypes.string,
  humidity: PropTypes.string,
  description: PropTypes.string,
  error: PropTypes.string,
};

FormResult.defaultProps = {
  city: '',
  country: '',
  temperature: '',
  humidity: '',
  description: '',
  error: '',
};

export default FormResult;
