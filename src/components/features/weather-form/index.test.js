import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import WeatherForm from '.';

describe('WeatherForm component', () => {
  let props;
  const renderComponent = (changedProps = {}) => {
    props = { ...props, ...changedProps };
    return render(<WeatherForm {...props} />);
  };

  beforeEach(() => {
    props = {
      onRequestWeather: jest.fn(),
    };
  });

  it('calls the prop "onRequestWeather" when form is submitted', async () => {
    const { queryByText, queryByPlaceholderText } = renderComponent();
    fireEvent.change(queryByPlaceholderText('Madrid'), {
      target: { value: 'Madrid' },
    });
    fireEvent.change(queryByPlaceholderText('es'), { target: { value: 'es' } });
    fireEvent.click(queryByText('Get Weather'));
    await waitFor(() =>
      expect(props.onRequestWeather).toHaveBeenCalledTimes(1)
    );
  });
  it('does not call the prop "onRequestWeather" when form is submitted if city is not filled up', async () => {
    const { queryByText, queryByPlaceholderText } = renderComponent();
    fireEvent.change(queryByPlaceholderText('es'), { target: { value: 'es' } });
    fireEvent.click(queryByText('Get Weather'));
    expect(props.onRequestWeather).not.toHaveBeenCalled();
  });
  it('does not call the prop "onRequestWeather" when form is submitted if country is not filled up', async () => {
    const { queryByText, queryByPlaceholderText } = renderComponent();
    fireEvent.change(queryByPlaceholderText('Madrid'), {
      target: { value: 'Madrid' },
    });
    fireEvent.click(queryByText('Get Weather'));
    expect(props.onRequestWeather).not.toHaveBeenCalled();
  });
});
