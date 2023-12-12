import { render, screen } from '@testing-library/react';
import { Layout } from '.';

describe('Layout', () => {
  test('renders', () => {
    render(<Layout>layout</Layout>);

    const layoutElement = screen.getByText('layout');
    expect(layoutElement).toBeInTheDocument();
  });
});
