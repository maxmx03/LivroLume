import { render, screen } from '@testing-library/react';
import { Layout } from '.';

describe('Layout', () => {
  test('renders', () => {
    render(<Layout>layout</Layout>);

    const text = screen.getByText('layout');
    expect(text).toBeInTheDocument();
  });
});
