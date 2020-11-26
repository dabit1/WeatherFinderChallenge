import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="city" placeholder="Madrid" />
      <input type="text" name="country" placeholder="es" />
      <button>Get Weather</button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
