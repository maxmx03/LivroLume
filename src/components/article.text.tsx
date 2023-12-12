import { render, screen } from '@testing-library/react';
import { Article } from '.';

describe('Article', () => {
  test('render', () => {
    render(<Article title="Test 1">Lorem ipsum dolor sit amet.</Article>);

    const articleTitle = screen.getByRole('heading');
    expect(articleTitle).toHaveTextContent('Test 1');

    const articleText = screen.getByText('Lorem ipsum dolor sit amet.');
    expect(articleText).toBeInTheDocument()
  });
});
