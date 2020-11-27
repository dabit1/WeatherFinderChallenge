import React from 'react';
import { render } from '@testing-library/react';
import FormResult from './form-result';

describe('FormResult component', () => {
  let props;
  const renderComponent = (changedProps = {}) => {
    props = { ...props, ...changedProps };
    return render(<FormResult {...props} />);
  };
  beforeEach(() => {
    props = {
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
    };
  });
  describe('Location', () => {
    it('does not render the location if city is empty', () => {
      const { queryByText } = renderComponent({
        city: undefined,
        country: 'Es',
      });
      expect(queryByText('Location')).not.toBeInTheDocument();
    });
    it('does not render the location if country is empty', () => {
      const { queryByText } = renderComponent({
        city: 'Madrid',
        country: '',
      });
      expect(queryByText('Location')).not.toBeInTheDocument();
    });
    it('renders the location if the values are not empty', () => {
      const { queryByText } = renderComponent({
        city: 'Madrid',
        country: 'Es',
      });
      expect(queryByText('Location:')).toBeInTheDocument();
      expect(queryByText(/Madrid/)).toBeInTheDocument();
      expect(queryByText(/Es/)).toBeInTheDocument();
    });
  });
  describe('Temperature', () => {
    it('does not render the temperature if it is empty', () => {
      const { queryByText } = renderComponent({
        temperature: undefined,
      });
      expect(queryByText('Temperature:')).not.toBeInTheDocument();
    });
    it('renders the temperature if it is not empty', () => {
      const { queryByText } = renderComponent({
        temperature: 10,
      });
      expect(queryByText('10')).toBeInTheDocument();
    });
  });
  describe('Humidity', () => {
    it('does not render the humidity if it is empty', () => {
      const { queryByText } = renderComponent({
        humidity: undefined,
      });
      expect(queryByText('Humidity:')).not.toBeInTheDocument();
    });
    it('renders the humidity if it is not empty', () => {
      const { queryByText } = renderComponent({
        humidity: 20,
      });
      expect(queryByText('20')).toBeInTheDocument();
    });
  });
  describe('Description', () => {
    it('does not render the description if it is empty', () => {
      const { queryByText } = renderComponent({
        description: undefined,
      });
      expect(queryByText('Description:')).not.toBeInTheDocument();
    });
    it('renders the description if it is not empty', () => {
      const { queryByText } = renderComponent({
        description: 'My description',
      });
      expect(queryByText('My description')).toBeInTheDocument();
    });
  });
  describe('Errors', () => {
    it('does not render the error if there is not', () => {
      const { queryByTestId } = renderComponent({
        error: undefined,
      });
      expect(queryByTestId('form-result-comp-error')).not.toBeInTheDocument();
    });
    it('renders the error if there is', () => {
      const { queryByText } = renderComponent({
        error: 'Something went wrong',
      });
      expect(queryByText('Something went wrong')).toBeInTheDocument();
    });
  });
});
