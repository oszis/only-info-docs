import React from 'react';
import { render } from '@testing-library/react';
import AppRouting from './pages/App.routing';

test('renders learn react link', () => {
  const { getByText } = render(<AppRouting />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
