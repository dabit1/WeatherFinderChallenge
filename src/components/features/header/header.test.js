import React from 'react';
import { render } from '@testing-library/react';
import Header from '.';

describe('Header component', () => {
  const renderComponent = () => render(<Header />);

  it('renders a title', () => {
    const { queryByText } = renderComponent();
    expect(queryByText('Weather Finder')).toBeInTheDocument();
  });
  it('renders a subtitle', () => {
    const { queryByText } = renderComponent();
    expect(
      queryByText('Find out temperature, conditions and more...')
    ).toBeInTheDocument();
  });
});
