import React from 'react';
import { render } from '@testing-library/react';
import FormResultValue from './form-result-value';

describe('FormResultValue component', () => {
  let props;
  const renderComponent = (changedProps = {}) => {
    props = { ...props, ...changedProps };
    return render(<FormResultValue {...props} />);
  };
  beforeEach(() => {
    props = {
      title: '',
      children: '',
    };
  });
  it('renders the "title" prop', () => {
    const { queryByText } = renderComponent({ title: 'My title' });
    expect(queryByText('My title:')).toBeInTheDocument();
  });
  it('renders the content passed as children', () => {
    const { queryByText } = renderComponent({ children: <span>Hello!</span> });
    expect(queryByText('Hello!')).toBeInTheDocument();
  });
});
