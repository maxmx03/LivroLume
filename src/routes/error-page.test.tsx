import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ErrorPage from './error-page';

describe('ErrorPage', () => {
  test('renders 404 page when navigating to an invalid route', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <ErrorPage />
      </MemoryRouter>
    );

    const notFound = screen.getByRole('heading');
    expect(notFound).toHaveTextContent('404');

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Go Back');
  });
});
