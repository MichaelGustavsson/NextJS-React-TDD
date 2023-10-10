import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import HomePage from '@/pages';

describe('Home page', () => {
  it('should have a heading Välkommen till MovieFlix', () => {
    // Arrange...
    render(<HomePage />);

    // Act...
    const heading = screen.getByRole('heading', { name: /Välkommen till MovieFlix/i });

    // Assert...
    expect(heading).toBeInTheDocument();
    // const textToTest = screen.getByText('pages/index.tsx');
    // expect(textToTest).toBeInTheDocument();
  });

  it("should have the text 'Vi erbjuder de senaste filmerna och TV-serierna'", () => {
    render(<HomePage />);
    const text = screen.getByText('Vi erbjuder de senaste filmerna och TV-serierna');
    expect(text).toBeInTheDocument();
  });
});
