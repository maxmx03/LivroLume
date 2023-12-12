import { render, screen } from '@testing-library/react';
import { Article, Section } from '.';

describe('Section', () => {
  test('render child', () => {
    render(
      <Section>
        <Article title="Test 1">Lorem ipsum dolor sit amet.</Article>
        <Article title="Test 2">Lorem ipsum dolor sit amet.</Article>
        <Article title="Test 3">Lorem ipsum dolor sit amet.</Article>
      </Section>
    );

    const articleTitle = screen.getAllByRole('heading');
    expect(articleTitle.length).toBe(3);

    const articleText = screen.getAllByText('Lorem ipsum dolor sit amet.');
    expect(articleText.length).toBe(3);
  });
});
