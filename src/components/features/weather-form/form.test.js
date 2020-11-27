import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './form';

describe('Form component', () => {
  let props;
  const renderComponent = (changedProps = {}) => {
    props = { ...props, ...changedProps };
    return render(<Form {...props} />);
  };
  beforeEach(() => {
    props = {
      onSubmit: jest.fn(),
    };
  });
  it('calls onSubmit when form is submitted', () => {
    const { queryByText } = renderComponent();
    fireEvent.click(queryByText('Get Weather'));
    expect(props.onSubmit).toHaveBeenCalled();
  });
});
