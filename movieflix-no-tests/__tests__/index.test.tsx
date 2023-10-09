/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  it('should render the title Välkommen till MovieFlix', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { name: 'Välkommen till MovieFlix' });

    expect(heading).toBeInTheDocument();
  });
});
