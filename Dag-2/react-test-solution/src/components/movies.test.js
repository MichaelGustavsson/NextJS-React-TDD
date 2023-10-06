import { render, screen, fireEvent } from '@testing-library/react';
import Movies from './movies';

describe('Movies Component', () => {
  it('should have a heading stating populära filmer', () => {
    // Arrange...
    render(<Movies />);
    // Act...
    const heading = screen.getByRole('heading', 'Populära Filmer');
    // Assert...
    expect(heading).toBeInTheDocument();
  });

  describe('should have a button for adding and removing favorites', () => {
    it('should have a button with the text Gör till favorit', () => {
      // Arrange...
      render(<Movies />);
      // Act...
      const button = screen.getByRole('button', { name: /Gör till favorit/i });
      // Assert...
      expect(button).toBeInTheDocument();
    });

    it('the button should be red', () => {
      // Arrange...
      render(<Movies />);
      // Act...
      const button = screen.getByRole('button', { name: /Gör till favorit/i });
      // Assert...
      expect(button).toHaveStyle({ 'background-color': 'red' });
      // expect(button).toHaveStyle({ backgroundColor: 'red' });
    });

    it('the button should change background to orange when clicked', () => {
      // Arrange...
      render(<Movies />);
      // Act...
      const button = screen.getByRole('button', { name: /Gör till favorit/i });
      fireEvent.click(button);

      expect(button).toHaveStyle({ 'background-color': 'orange' });
    });

    it('checkbox should be unchecked initially', () => {
      // Arrange...
      render(<Movies />);
      // Act...
      const checkbox = screen.getByRole('checkbox', { name: 'Avaktivera favorit knappen' });
      // Assert...
      expect(checkbox).not.toBeChecked();
    });

    it('the add to favorite button should be disabled when the checkbox is checked', () => {
      // Arrange...
      render(<Movies />);
      // Act...
      const checkbox = screen.getByRole('checkbox', { name: 'Avaktivera favorit knappen' });
      const button = screen.getByRole('button', { name: /Gör till favorit/i });

      fireEvent.click(checkbox);

      // Assert...
      expect(button).toBeDisabled();
    });
  });

  // it('should have a button with the text Gör till favorit with red background', () => {
  //   // Arrange...
  //   render(<Movies />);
  //   // Act...
  //   const button = screen.getByRole('button', { name: /Gör till favorit/i });
  //   // Assert...
  //   expect(button).toBeInTheDocument();
  //   expect(button).toHaveStyle({ backgroundColor: 'red' });
  // });
});
