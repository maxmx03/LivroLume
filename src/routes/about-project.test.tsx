import { render, screen } from '@testing-library/react';
import AboutProject from './about-project';
import { externalRoute } from '../constants/routes';

describe('AboutProject Component', () => {
  test('renders project information correctly', () => {
    render(<AboutProject />);

    const projectInfoText = screen.getByText(
      'LivroLume is your passport to a captivating world of literature. As a sophisticated EPUB reader, LivroLume offers an immersive and user-friendly platform to delve into your favorite stories, documents, and publications.'
    );
    expect(projectInfoText).toBeInTheDocument();

    const aboutProjectText = screen.getByText(
      'This project is open-source. You can check it out .'
    );
    expect(aboutProjectText).toBeInTheDocument();

    const externalLink = screen.getByRole('link', { name: 'here' });
    expect(externalLink).toHaveAttribute('href', externalRoute.project);
    expect(externalLink).toHaveAttribute('target', '_blank'); // If the link opens in a new tab/window
  });
});
