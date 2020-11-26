import React from 'react';
import PropTypes from 'prop-types';

const FormResultValue = ({ title, children }) => {
  return (
    <p className="weather__key">
      {' '}
      {title}:<span className="weather__value">{children}</span>
    </p>
  );
};

FormResultValue.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormResultValue;
