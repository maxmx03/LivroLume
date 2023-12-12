import bookRoute from './book-route';

describe('book route', () => {
  test('url', () => {
    const baseUrl = bookRoute.baseUrl;
    expect(bookRoute.read.url()).toBe(baseUrl + '/read');
    expect(bookRoute.edit.url()).toBe(baseUrl + '/edit');
  });
});
