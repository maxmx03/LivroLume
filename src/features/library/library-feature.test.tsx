import { render, screen } from '@testing-library/react';
import Library from './library-feature';
import { store } from '../../app/store';
import { Book, libraryAddMany, librarySelector } from './library-reducer';

describe('Library feature', () => {
  const books: Book[] = [
    {
      id: 1,
      title: 'Book Title 1',
      description: 'Description for Book 1',
      creator: 'Author 1',
      publisher: 'Publisher 1',
      pubdate: '2023-01-01',
      location: 'Library A',
      filePath: '/path/to/book1.epub',
      cover: '/path/to/book1-cover.jpg',
      isPageMarked: false,
    },
    {
      id: 2,
      title: 'Book Title 2',
      description: 'Description for Book 2',
      creator: 'Author 2',
      publisher: 'Publisher 2',
      pubdate: '2023-02-01',
      location: 'Library B',
      filePath: '/path/to/book2.epub',
      cover: '/path/to/book2-cover.jpg',
      isPageMarked: true,
    },
  ];

  beforeAll(() => {
    store.dispatch(libraryAddMany(books));
  });

  test('renders book titles', async () => {
    render(<Library books={librarySelector.selectAll(store.getState())} />);

    const bookTitleElements1 = await screen.findAllByText('Book Title 1');
    expect(bookTitleElements1.length).toBe(2);

    const bookTitleElements2 = await screen.findAllByText('Book Title 2');
    expect(bookTitleElements2.length).toBe(2);
  });
});
