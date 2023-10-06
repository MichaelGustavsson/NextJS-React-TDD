import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders learn react link', () => {
    //Arrange...
    render(<App />);
    // Act...
    const linkElement = screen.getByText(/learn react/i);
    // Assert...
    expect(linkElement).toBeInTheDocument();
  });
});
