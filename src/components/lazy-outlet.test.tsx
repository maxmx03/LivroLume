import { render, screen } from '@testing-library/react';
import LazyOutlet from './lazy-outlet';

jest.mock('react-router-dom', () => ({
  useNavigation: jest.fn(),
}));

describe('LazyOutlet Component', () => {
  test('loading indicator when navigation state is not idle', () => {
    const mockNavigationState = 'loading';
    const useNavigationMock =
      jest.requireMock('react-router-dom').useNavigation;
    useNavigationMock.mockReturnValue({ state: mockNavigationState });

    render(<LazyOutlet />);

    expect(screen.getByText(mockNavigationState)).toBeInTheDocument();
  });
});
