import { render, screen } from '@testing-library/react';
import Header from './header';

// Check for title 'Kubernetes App Java'
test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Kubernetes App Java/i);
  expect(linkElement).toBeInTheDocument();
});
