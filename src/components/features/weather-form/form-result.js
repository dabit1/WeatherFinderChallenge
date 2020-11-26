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
  temperature: PropTypes.number,
  humidity: PropTypes.number,
  description: PropTypes.string,
  error: PropTypes.string,
};

FormResult.defaultProps = {
  city: undefined,
  country: undefined,
  temperature: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined,
};

export default FormResult;
